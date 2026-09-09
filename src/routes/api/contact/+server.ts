import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'node:fs';
import path from 'node:path';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const { fullName, email, phone, company, useCase, notes } = data;

    if (!fullName || !email || !phone) {
      return json(
        { success: false, error: 'Vui lòng cung cấp đầy đủ họ tên, email và số điện thoại.' },
        { status: 400 }
      );
    }

    const submission = {
      id: 'REQ-' + Date.now(),
      timestamp: new Date().toISOString(),
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      company: company ? String(company).trim() : 'Cá nhân / Chưa cung cấp',
      useCase: useCase || 'Phát triển Phần mềm theo yêu cầu & RustSale CRM',
      notes: notes ? String(notes).trim() : ''
    };

    console.log('[CreditBird Lead Received]:', JSON.stringify(submission, null, 2));

    // Bắt buộc lưu trữ thành công vào file jsonl mới trả về kết quả thành công
    try {
      const dataDir = path.resolve(process.cwd(), '.data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'inquiries.jsonl');
      fs.appendFileSync(filePath, JSON.stringify(submission) + '\n', 'utf-8');
    } catch (storageErr) {
      console.error('[CreditBird Lead Storage Error]:', storageErr);
      return json(
        {
          success: false,
          error: 'Hệ thống tiếp nhận đang gặp sự cố khi lưu trữ dữ liệu. Quý khách vui lòng gọi trực tiếp hotline 0932.640.968 hoặc chat Zalo để được hỗ trợ ngay.'
        },
        { status: 500 }
      );
    }

    return json({
      success: true,
      message: 'Yêu cầu tư vấn của quý khách đã được lưu trữ thành công. Chuyên viên của CreditBird sẽ liên hệ lại trong ngày làm việc.',
      leadId: submission.id
    });
  } catch (error) {
    console.error('[CreditBird Lead API Error]:', error);
    return json(
      { success: false, error: 'Có lỗi xảy ra khi tiếp nhận thông tin. Quý khách vui lòng gọi trực tiếp hotline 0932.640.968.' },
      { status: 500 }
    );
  }
};
