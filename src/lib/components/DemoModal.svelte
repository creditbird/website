<script lang="ts">
  import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal, PhoneCall } from 'lucide-svelte';

  let { isOpen = false, onclose }: { isOpen?: boolean; onclose?: () => void } = $props();

  let fullName = $state('');
  let email = $state('');
  let phone = $state('');
  let company = $state('');
  let useCase = $state('Phát triển ERP doanh nghiệp');
  let isSubmitting = $state(false);
  let submitted = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email || !fullName) return;

    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      submitted = true;
    }, 600);
  }

  function handleClose() {
    submitted = false;
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
    <div class="relative w-full max-w-lg bg-white border border-[#cbd5e1] rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.22)] overflow-hidden text-left">
      
      <!-- Close Button -->
      <button 
        type="button" 
        onclick={handleClose}
        class="absolute top-4 right-4 text-[#64748b] hover:text-[#090e1f] p-1 rounded hover:bg-[#f1f5f9] transition-colors cursor-pointer"
        aria-label="Đóng cửa sổ"
      >
        <X size={20} />
      </button>

      {#if !submitted}
        <!-- Modal Header -->
        <div class="p-6 sm:p-7 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)]"></span>
            <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
              CREDITBIRD • ĐĂNG KÝ TƯ VẤN DOANH NGHIỆP
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-[#090e1f]">
            Đặt lịch tư vấn cùng chuyên gia
          </h3>
          <p class="text-xs sm:text-sm text-[#475569] mt-1">
            Khảo sát yêu cầu, tư vấn kiến trúc phần mềm may đo, hệ thống ERP, cung ứng nhân sự IT hoặc giải pháp máy phun tinh dầu thông minh.
          </p>
        </div>

        <!-- Form -->
        <form onsubmit={handleSubmit} class="p-6 sm:p-7 flex flex-col gap-4 font-sans text-sm">
          
          <div>
            <label for="modal-name" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
              HỌ VÀ TÊN <span class="text-[var(--cb-cobalt-500)]">*</span>
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
              <label for="modal-email" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                EMAIL CÔNG VIỆC <span class="text-[var(--cb-cobalt-500)]">*</span>
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

            <div>
              <label for="modal-phone" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                SỐ ĐIỆN THOẠI
              </label>
              <input 
                id="modal-phone" 
                type="tel" 
                bind:value={phone}
                placeholder="0932.xxx.xxx" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="modal-company" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                TÊN DOANH NGHIỆP / TỔ CHỨC
              </label>
              <input 
                id="modal-company" 
                type="text" 
                bind:value={company}
                placeholder="Tên công ty của bạn" 
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              />
            </div>

            <div>
              <label for="modal-usecase" class="block font-mono text-xs text-[#475569] mb-1.5 font-medium">
                DỊCH VỤ QUAN TÂM
              </label>
              <select 
                id="modal-usecase" 
                bind:value={useCase}
                class="w-full h-10 px-3 rounded bg-[#f8fafc] border border-[#cbd5e1] text-[#090e1f] focus:outline-none focus:border-[var(--cb-cobalt-500)] focus:bg-white text-sm font-sans"
              >
                <option value="Viết phần mềm may đo (Web, Mobile, Microservices)">Viết phần mềm may đo (Web, Mobile, Microservices)</option>
                <option value="RustSale CRM Omnichannel (Desktop Native Rust)">RustSale CRM Omnichannel (Desktop Native Rust)</option>
                <option value="Cho thuê nhân sự IT doanh nghiệp (Onsite/Remote)">Cho thuê nhân sự IT doanh nghiệp (Onsite/Remote)</option>
                <option value="Kelvot ERP (Sản xuất Multi-BOM, Kho WMS, VAS/IFRS)">Kelvot ERP (Sản xuất Multi-BOM, Kho WMS, VAS/IFRS)</option>
                <option value="Lemy Finest Scent (Máy phun HVAC & Tinh dầu COA)">Lemy Finest Scent (Máy phun HVAC & Tinh dầu COA)</option>
                <option value="Tư vấn trọn gói hệ sinh thái CreditBird">Tư vấn trọn gói hệ sinh thái CreditBird</option>
              </select>
            </div>
          </div>

          <div class="mt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              class="btn-cta-primary w-full !h-11 text-xs cursor-pointer flex items-center justify-center gap-2"
            >
              {#if isSubmitting}
                <span>Đang xử lý tiếp nhận...</span>
              {:else}
                <span>GỬI YÊU CẦU TƯ VẤN MIỄN PHÍ</span>
                <ArrowRight size={14} />
              {/if}
            </button>
          </div>

          <div class="flex items-center justify-center gap-2 font-mono text-[0.6875rem] text-[#64748b] mt-1">
            <ShieldCheck size={12} class="text-[var(--cb-emerald-500)]" />
            <span>Cam kết bảo mật thông tin theo NĐ 13/2023/NĐ-CP • Phản hồi trong 2 giờ</span>
          </div>

        </form>
      {:else}
        <!-- Success State -->
        <div class="p-8 sm:p-10 text-center flex flex-col items-center">
          <div class="w-14 h-14 rounded-full bg-[rgba(16,185,129,0.15)] text-[var(--cb-emerald-500)] flex items-center justify-center mb-5">
            <CheckCircle2 size={32} />
          </div>
          <h3 class="text-2xl font-bold text-[#090e1f] mb-2">
            Tiếp nhận yêu cầu thành công!
          </h3>
          <p class="text-sm text-[#475569] max-w-sm mb-6 leading-relaxed">
            Cảm ơn quý khách <strong class="text-[#090e1f]">{fullName}</strong>. Chuyên viên giải pháp của CreditBird sẽ liên hệ tới email <strong class="text-[#090e1f]">{email}</strong> và số điện thoại trong vòng 2 giờ làm việc.
          </p>
          <div class="p-4 rounded bg-[#f8fafc] border border-[#cbd5e1] font-mono text-xs text-left w-full mb-6 text-[#1e293b] flex flex-col gap-1.5">
            <div class="text-[var(--cb-cobalt-500)] font-bold mb-0.5">THÔNG TIN TIẾP NHẬN CHÍNH THỨC:</div>
            <div>Đơn vị: <span class="text-[#090e1f] font-semibold">CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</span></div>
            <div>Mã số thuế: <span class="text-[var(--cb-emerald-600)] font-semibold">0315397327</span></div>
            <div>Dịch vụ đăng ký: <span class="text-[#090e1f] font-semibold">{useCase}</span></div>
            <div>Hotline hỗ trợ gấp: <span class="text-[var(--cb-cobalt-600)] font-semibold">0932.640.968</span></div>
          </div>
          <button 
            type="button" 
            onclick={handleClose}
            class="btn-cta-primary !h-10 text-xs px-6 cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      {/if}

    </div>
  </div>
{/if}
