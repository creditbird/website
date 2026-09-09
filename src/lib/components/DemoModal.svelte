<script lang="ts">
  import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, MessageCircle, AlertCircle } from 'lucide-svelte';

  let { isOpen = false, onclose }: { isOpen?: boolean; onclose?: () => void } = $props();

  let fullName = $state('');
  let email = $state('');
  let phone = $state('');
  let company = $state('');
  let useCase = $state('Phát triển Phần mềm theo yêu cầu & RustSale CRM');
  let notes = $state('');
  let isSubmitting = $state(false);
  let submitted = $state(false);
  let errorMessage = $state('');
  let leadReference = $state('');

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email || !fullName || !phone) {
      errorMessage = 'Vui lòng điền đầy đủ họ tên, số điện thoại và email.';
      return;
    }

    isSubmitting = true;
    errorMessage = '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          useCase,
          notes
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        submitted = true;
        leadReference = data.leadId || 'REQ-' + Date.now();
      } else {
        errorMessage = data.error || 'Có lỗi xảy ra khi gửi thông tin. Quý khách vui lòng gọi Hotline 0932.640.968.';
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      // Vẫn hỗ trợ ghi nhận fallback và hướng dẫn khách hàng
      errorMessage = 'Không thể kết nối máy chủ. Quý khách vui lòng gọi điện thoại trực tiếp hoặc chat Zalo.';
    } finally {
      isSubmitting = false;
    }
  }

  function handleClose() {
    submitted = false;
    errorMessage = '';
    onclose?.();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    role="dialog"
    aria-modal="true"
  >
    <!-- Modal Card -->
    <div class="relative w-full max-w-lg bg-white border border-[#cbd5e1] rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.22)] overflow-hidden text-left max-h-[92vh] flex flex-col">
      
      <!-- Close Button -->
      <button 
        type="button" 
        onclick={handleClose}
        class="absolute top-4 right-4 z-10 text-[#64748b] hover:text-[#090e1f] p-1 rounded hover:bg-[#f1f5f9] transition-colors cursor-pointer"
        aria-label="Đóng cửa sổ"
      >
        <X size={20} />
      </button>

      {#if !submitted}
        <!-- Modal Header -->
        <div class="p-6 sm:p-7 border-b border-[#e2e8f0] bg-[#f8fafc] shrink-0">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)]"></span>
            <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
              CREDITBIRD • TIẾP NHẬN TƯ VẤN
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-[#090e1f]">
            Đăng ký nhận tư vấn giải pháp
          </h3>
          <p class="text-xs sm:text-sm text-[#475569] mt-1">
            Chọn nhu cầu phù hợp: Phần mềm may đo, giải pháp Kelvot ERP, hoặc tinh dầu & máy phun Lemy Finest.
          </p>
        </div>

        <!-- Form Body with Scroll -->
        <form onsubmit={handleSubmit} class="p-6 sm:p-7 flex flex-col gap-4 font-sans text-sm overflow-y-auto flex-1">
          
          {#if errorMessage}
            <div class="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle size={16} class="shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          {/if}

          <div>
            <label for="modal-name" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
              HỌ VÀ TÊN <span class="text-red-500">*</span>
            </label>
            <input 
              id="modal-name" 
              type="text" 
              bind:value={fullName} 
              required
              placeholder="Ví dụ: Nguyễn Văn An" 
              class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="modal-phone" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                SỐ ĐIỆN THOẠI / ZALO <span class="text-red-500">*</span>
              </label>
              <input 
                id="modal-phone" 
                type="tel" 
                bind:value={phone}
                required
                placeholder="0932.xxx.xxx" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>

            <div>
              <label for="modal-email" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                EMAIL LIÊN HỆ <span class="text-red-500">*</span>
              </label>
              <input 
                id="modal-email" 
                type="email" 
                bind:value={email} 
                required
                placeholder="an.nguyen@company.vn" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="modal-company" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                DOANH NGHIỆP / TỔ CHỨC
              </label>
              <input 
                id="modal-company" 
                type="text" 
                bind:value={company}
                placeholder="Tên công ty / Cửa hàng" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>

            <div>
              <label for="modal-usecase" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                NHU CẦU TRỌNG TÂM <span class="text-red-500">*</span>
              </label>
              <select 
                id="modal-usecase" 
                bind:value={useCase}
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              >
                <option value="Phát triển Phần mềm theo yêu cầu & RustSale CRM">1. Phát triển Phần mềm may đo & RustSale CRM</option>
                <option value="Giải pháp quản trị Kelvot ERP">2. Giải pháp quản trị Kelvot ERP (Sản xuất, Kho, Kế toán)</option>
                <option value="Tinh dầu thiên nhiên & Máy phun Lemy Finest">3. Tinh dầu & Máy phun khuếch tán Lemy Finest</option>
                <option value="Cho thuê nhân sự IT doanh nghiệp">4. Cho thuê nhân sự IT chuyên nghiệp (Onsite/Remote)</option>
                <option value="Tư vấn tổng hợp theo bài toán riêng">5. Tư vấn tổng hợp theo bài toán riêng</option>
              </select>
            </div>
          </div>

          <div>
            <label for="modal-notes" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
              MÔ TẢ YÊU CẦU SƠ BỘ
            </label>
            <textarea 
              id="modal-notes" 
              bind:value={notes}
              rows="2"
              placeholder="Ví dụ: Cần may đo ứng dụng web quản lý đơn hàng hoặc tư vấn máy phun tinh dầu cho showroom 200m2..." 
              class="w-full p-2.5 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
            ></textarea>
          </div>

          <div class="mt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              class="btn-cta-primary w-full !h-11 text-xs cursor-pointer flex items-center justify-center gap-2"
            >
              {#if isSubmitting}
                <span>Đang gửi thông tin tiếp nhận...</span>
              {:else}
                <span>GỬI THÔNG TIN TƯ VẤN</span>
                <ArrowRight size={14} />
              {/if}
            </button>
          </div>

          <div class="flex items-center justify-between text-xs text-[#64748b] pt-1 border-t border-[#f1f5f9]">
            <div class="flex items-center gap-1.5 font-mono text-[0.6875rem]">
              <ShieldCheck size={13} class="text-[var(--cb-emerald-500)]" />
              <span>Bảo mật dữ liệu cá nhân</span>
            </div>
            <a href="tel:0932640968" class="font-mono text-[0.6875rem] text-[var(--cb-cobalt-600)] hover:underline flex items-center gap-1">
              <PhoneCall size={12} />
              <span>Hotline: 0932.640.968</span>
            </a>
          </div>

        </form>
      {:else}
        <!-- Success State -->
        <div class="p-8 sm:p-10 text-center flex flex-col items-center overflow-y-auto">
          <div class="w-14 h-14 rounded-full bg-[rgba(16,185,129,0.15)] text-[var(--cb-emerald-500)] flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 class="text-2xl font-bold text-[#090e1f] mb-2">
            Đã tiếp nhận yêu cầu thành công!
          </h3>
          <p class="text-sm text-[#475569] max-w-md mb-6 leading-relaxed">
            Cảm ơn quý khách <strong class="text-[#090e1f]">{fullName}</strong>. Thông tin yêu cầu tư vấn của quý khách đã được lưu trữ thành công trên hệ thống của CreditBird với mã hồ sơ <strong class="font-mono text-[var(--cb-cobalt-600)]">{leadReference}</strong>.
          </p>

          <div class="p-4 rounded bg-[#f8fafc] border border-[#cbd5e1] font-mono text-xs text-left w-full mb-6 text-[#1e293b] flex flex-col gap-2">
            <div class="text-[var(--cb-cobalt-500)] font-bold mb-0.5">HỒ SƠ TƯ VẤN:</div>
            <div>Họ tên: <span class="text-[#090e1f] font-semibold">{fullName}</span></div>
            <div>Số điện thoại: <span class="text-[#090e1f] font-semibold">{phone}</span></div>
            <div>Email: <span class="text-[#090e1f] font-semibold">{email}</span></div>
            <div>Nhu cầu: <span class="text-[#090e1f] font-semibold">{useCase}</span></div>
            <div>Thời gian phản hồi: <span class="text-[var(--cb-emerald-600)] font-semibold">Trong ngày làm việc (giờ hành chính)</span></div>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <a 
              href="tel:0932640968" 
              class="btn-cta-primary !h-10 text-xs px-5 flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <PhoneCall size={14} />
              <span>Gọi Hotline 0932.640.968</span>
            </a>
            <button 
              type="button" 
              onclick={handleClose}
              class="btn-cta-outline !h-10 text-xs px-6 cursor-pointer w-full sm:w-auto"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      {/if}

    </div>
  </div>
{/if}
