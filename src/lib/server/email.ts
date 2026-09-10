import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

export interface LeadSubmission {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  useCase?: string;
  notes?: string;
}

export const SERVICE_LABELS: Record<string, string> = {
  software: 'Phát triển Phần mềm theo yêu cầu (Web / Mobile Apps)',
  erp: 'Hệ sinh thái Quản trị ERP & CRM Doanh nghiệp (RustSale)',
  scent: 'Giải pháp Tiếp thị Mùi hương & Máy khuếch tán HVAC (Scent Marketing)',
  it: 'Cung ứng Nhân sự IT & Biệt đội Công nghệ Chuyên trách'
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatVietnamTime(isoString: string): string {
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(date) + ' (GMT+7)';
  } catch {
    return isoString;
  }
}

/**
 * Gửi email thông báo lead tư vấn mới đến ban quản trị CreditBird
 */
export async function sendLeadNotificationEmail(submission: LeadSubmission): Promise<{
  success: boolean;
  id?: string;
  error?: string;
}> {
  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[CreditBird Email] RESEND_API_KEY is not configured in environment.');
    return { success: false, error: 'RESEND_API_KEY is missing' };
  }

  const resend = new Resend(apiKey);

  const fromEmail = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'CreditBird <contact@creditbirdtech.com>';
  const toEmail = env.RESEND_NOTIFICATION_EMAIL || process.env.RESEND_NOTIFICATION_EMAIL || 'tymon3568@gmail.com';

  const serviceName = SERVICE_LABELS[submission.useCase || ''] || submission.useCase || 'Chưa xác định';
  const formattedTime = formatVietnamTime(submission.timestamp);

  const safeName = escapeHtml(submission.fullName);
  const safeEmail = escapeHtml(submission.email);
  const safePhone = escapeHtml(submission.phone);
  const safeCompany = escapeHtml(submission.company || 'Chưa cung cấp');
  const safeService = escapeHtml(serviceName);
  const safeNotes = submission.notes ? escapeHtml(submission.notes).replace(/\n/g, '<br/>') : '<em>Không có ghi chú thêm</em>';

  const subject = `[CreditBird Lead] Yêu cầu tư vấn mới từ ${submission.fullName} (${submission.id})`;

  const textBody = `
==============================================
CREDITBIRD TECH - YÊU CẦU TƯ VẤN MỚI
==============================================
Mã yêu cầu: ${submission.id}
Thời gian nhận: ${formattedTime}

THÔNG TIN KHÁCH HÀNG:
- Họ và tên: ${submission.fullName}
- Số điện thoại: ${submission.phone}
- Email: ${submission.email}
- Doanh nghiệp: ${submission.company || 'Chưa cung cấp'}
- Dịch vụ quan tâm: ${serviceName}

GHI CHÚ / YÊU CẦU:
${submission.notes || 'Không có ghi chú thêm'}

----------------------------------------------
Website: https://creditbirdtech.com
Hotline: +84 932 640 968
Email hệ thống tự động CreditBird.
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #090e1f; padding: 28px 32px; border-bottom: 3px solid #22439c;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #38bdf8; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px;">
                      // CREDITBIRD LEAD TELEMETRY
                    </div>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      Yêu cầu tư vấn dịch vụ mới
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; background-color: rgba(34, 67, 156, 0.4); border: 1px solid #38bdf8; color: #38bdf8; font-family: monospace; font-size: 11px; padding: 4px 10px; border-radius: 4px; font-weight: 600;">
                      ${escapeHtml(submission.id)}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Key Meta Bar -->
          <tr>
            <td style="background-color: #f8fafc; padding: 12px 32px; border-bottom: 1px solid #e2e8f0; font-size: 12px; color: #64748b; font-family: monospace;">
              <span>🕒 Thời gian tiếp nhận: <strong style="color: #090e1f;">${formattedTime}</strong></span>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #22439c; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">
                [THÔNG TIN KHÁCH HÀNG LIÊN HỆ]
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #64748b; font-weight: 600; width: 140px; border-bottom: 1px solid #f1f5f9;">Họ và tên:</td>
                  <td style="padding: 10px 12px; font-size: 14px; color: #090e1f; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Số điện thoại:</td>
                  <td style="padding: 10px 12px; font-size: 14px; color: #090e1f; font-weight: 700; border-bottom: 1px solid #f1f5f9;">
                    <a href="tel:${safePhone}" style="color: #22439c; text-decoration: none; font-weight: 700;">${safePhone}</a>
                    <span style="font-size: 11px; color: #10b981; font-weight: normal; margin-left: 8px;">(Bấm để gọi)</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Email liên hệ:</td>
                  <td style="padding: 10px 12px; font-size: 14px; color: #090e1f; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${safeEmail}" style="color: #22439c; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Doanh nghiệp:</td>
                  <td style="padding: 10px 12px; font-size: 14px; color: #090e1f; border-bottom: 1px solid #f1f5f9;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Dịch vụ quan tâm:</td>
                  <td style="padding: 10px 12px; font-size: 14px; color: #090e1f; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                    <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                      ${safeService}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Notes Section -->
              <h2 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; color: #22439c; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">
                [NỘI DUNG YÊU CẦU / GHI CHÚ]
              </h2>
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #22439c; border-radius: 6px; padding: 14px 16px; font-size: 13px; color: #334155; line-height: 1.6; margin-bottom: 28px;">
                ${safeNotes}
              </div>

              <!-- Quick Action Buttons -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 8px;" width="50%">
                    <a href="mailto:${safeEmail}?subject=Re: [CreditBird] Tư vấn giải pháp cho ${encodeURIComponent(submission.fullName)}" style="display: block; text-align: center; background-color: #22439c; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 6px; font-size: 13px; font-weight: 600;">
                      ✉️ Trả lời Email
                    </a>
                  </td>
                  <td style="padding-left: 8px;" width="50%">
                    <a href="tel:${safePhone}" style="display: block; text-align: center; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 6px; font-size: 13px; font-weight: 600;">
                      📞 Gọi Hotline Khách
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #475569; font-weight: 500;">
                CreditBird Technology Solutions — <a href="https://creditbirdtech.com" style="color: #22439c; text-decoration: none;">https://creditbirdtech.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; font-family: monospace;">
                Email thông báo tự động từ Hệ thống Tiếp nhận Khách hàng B2B CreditBird.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: submission.email,
      subject,
      text: textBody,
      html: htmlBody
    });

    if (error) {
      console.error('[CreditBird Resend Error]:', error);
      return { success: false, error: error.message };
    }

    console.log('[CreditBird Resend Success]: Email sent successfully with ID:', data?.id);
    return { success: true, id: data?.id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[CreditBird Resend Exception]:', message);
    return { success: false, error: message };
  }
}
