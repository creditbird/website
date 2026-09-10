import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'node:fs';
import path from 'node:path';
import { sendLeadNotificationEmail, type LeadSubmission } from '$lib/server/email';
import { verifyTurnstileToken } from '$lib/server/turnstile';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
  try {
    const data = await request.json();
    const { fullName, email, phone, company, useCase, notes, turnstileToken } = data;

    if (!fullName || !email || !phone) {
      return json(
        { success: false, error: 'Vui lòng cung cấp đầy đủ họ tên, email và số điện thoại.' },
        { status: 400 }
      );
    }

    // 1. Xác thực bảo mật Cloudflare Turnstile
    let clientIp: string | undefined;
    try {
      clientIp =
        request.headers.get('cf-connecting-ip') ||
        request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        getClientAddress();
    } catch {
      clientIp = undefined;
    }

    const turnstileResult = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      return json(
        {
          success: false,
          error: turnstileResult.error || 'Xác thực bảo mật Turnstile không thành công. Vui lòng thử lại.'
        },
        { status: 400 }
      );
    }

    const submission: LeadSubmission = {
      id: 'REQ-' + Date.now(),
      timestamp: new Date().toISOString(),
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      company: company ? String(company).trim() : 'Cá nhân / Chưa cung cấp',
      useCase: useCase || 'software',
      notes: notes ? String(notes).trim() : ''
    };

    console.log('[CreditBird Lead Received]:', JSON.stringify(submission, null, 2));

    // Lưu trữ dự phòng vào file jsonl (khả dụng trong môi trường có local filesystem)
    try {
      if (typeof process !== 'undefined' && process.cwd && typeof fs.appendFileSync === 'function') {
        const dataDir = path.resolve(process.cwd(), '.data');
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }
        const filePath = path.join(dataDir, 'inquiries.jsonl');
        fs.appendFileSync(filePath, JSON.stringify(submission) + '\n', 'utf-8');
      }
    } catch (storageErr) {
      console.warn('[CreditBird Lead Storage Notice]: Filesystem write skipped (serverless/edge runtime):', storageErr);
    }

    // Gửi email thông báo qua Resend tới tymon3568@gmail.com
    const emailResult = await sendLeadNotificationEmail(submission);
    if (!emailResult.success) {
      console.warn('[CreditBird Lead] Warning: Resend email dispatch failed:', emailResult.error);
    } else {
      console.log('[CreditBird Lead] Resend notification delivered, id:', emailResult.id);
    }

    return json({
      success: true,
      message: 'Yêu cầu tư vấn của quý khách đã được lưu trữ thành công. Chuyên viên của CreditBird sẽ liên hệ lại trong ngày làm việc.',
      leadId: submission.id,
      emailSent: emailResult.success
    });
  } catch (error) {
    console.error('[CreditBird Lead API Error]:', error);
    return json(
      { success: false, error: 'Có lỗi xảy ra khi tiếp nhận thông tin. Quý khách vui lòng gọi trực tiếp hotline +84 932 640 968.' },
      { status: 500 }
    );
  }
};
