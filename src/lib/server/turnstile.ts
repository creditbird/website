import { env } from '$env/dynamic/private';

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
  messages?: string[];
}

/**
 * Xác thực token Cloudflare Turnstile gửi từ client
 */
export async function verifyTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string
): Promise<{ success: boolean; error?: string }> {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    return {
      success: false,
      error: 'Vui lòng hoàn tất xác minh bảo mật Cloudflare Turnstile trước khi gửi yêu cầu.'
    };
  }

  const secretKey =
    env.CF_TURNSTILE_SECRET_KEY ||
    process.env.CF_TURNSTILE_SECRET_KEY ||
    '0x4AAAAAAEupJM0DcUVHesEunW_O3s4ZyNo';

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      console.error('[Cloudflare Turnstile] Siteverify HTTP error:', res.status, res.statusText);
      return {
        success: false,
        error: 'Máy chủ xác minh Cloudflare phản hồi không hợp lệ. Quý khách vui lòng thử lại sau giây lát.'
      };
    }

    const data = (await res.json()) as TurnstileVerifyResponse;

    if (!data.success) {
      console.warn('[Cloudflare Turnstile Verification Failed]:', data['error-codes'] || data);
      return {
        success: false,
        error: 'Xác minh người thật không thành công hoặc phiên bảo mật đã hết hạn. Vui lòng thử lại.'
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Cloudflare Turnstile Exception]:', message);
    return {
      success: false,
      error: 'Không thể kết nối đến máy chủ bảo mật Cloudflare để xác minh.'
    };
  }
}
