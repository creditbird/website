<script lang="ts">
  import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity, RefreshCw } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  type Mode = 'VND' | 'USD' | 'EUR' | 'DỰ ÁN';

  let selectedCurrency = $state<Mode>('VND');
  let volumeCount = $state(18450000000);
  let isSimulating = $state(false);

  const currencyRates: Record<Mode, { symbol: string; base: number; suffix: string }> = {
    VND: { symbol: '', base: 18450000000, suffix: '₫' },
    USD: { symbol: '$', base: 750000, suffix: '' },
    EUR: { symbol: '€', base: 690000, suffix: '' },
    'DỰ ÁN': { symbol: '', base: 128, suffix: ' Hệ thống' }
  };

  let transactions = $state([
    { id: 'tx_rustsale_01', source: '@doanhnghiep:ban_hang_omnichannel', dest: '@creditbird:rustsale_crm_desktop', amount: 'NATIVE RUST', status: 'TRIỂN KHAI', time: 'Vừa xong' },
    { id: 'tx_erp_81', source: '@tapdoan:nha_may_san_xuat', dest: '@kelvot:erp_bom_wms_accounting', amount: '+450,000,000₫', status: 'BÀN GIAO', time: '14 giây trước' },
    { id: 'tx_it_42', source: '@fintech_corp:dedicated_team', dest: '@creditbird:nhan_su_senior_devs', amount: '3 Kỹ sư Senior', status: 'ONBOARD 48H', time: '42 giây trước' },
    { id: 'tx_scent_19', source: '@chuoi_khachsan:resort_5sao', dest: '@lemyfinest:diffuser_hvac_system', amount: '100% COA Oil', status: 'VẬN HÀNH', time: '1 phút trước' }
  ]);

  function triggerSimulation() {
    isSimulating = true;
    const addAmount = selectedCurrency === 'DỰ ÁN' ? 1 : Math.floor(Math.random() * 50000000) + 10000000;
    volumeCount += addAmount;

    const sampleTypes = [
      { src: '@chuoi_cua_hang:sales_hub', dst: '@creditbird:rustsale_zalo_outreach', label: 'RUST NATIVE', amt: 'Zalo/WA/FB' },
      { src: '@nha_may:che_bien_go', dst: '@kelvot:mrp_production_ledger', label: 'KELVOT ERP', amt: '+180,000,000₫' },
      { src: '@nganhang:core_banking', dst: '@creditbird:software_microservices', label: 'FULL SOURCE', amt: '+520,000,000₫' },
      { src: '@showroom:oto_luxury', dst: '@lemyfinest:scent_signature_brand', label: 'SCENT COA', amt: 'Nano HVAC' }
    ];
    const randType = sampleTypes[Math.floor(Math.random() * sampleTypes.length)];

    const newTx = {
      id: `tx_${Math.random().toString(36).substring(2, 6)}`,
      source: randType.src,
      dest: randType.dst,
      amount: randType.amt,
      status: randType.label,
      time: 'Vừa xong'
    };

    transactions = [newTx, ...transactions.slice(0, 3)];
    setTimeout(() => {
      isSimulating = false;
    }, 600);
  }

  function setCurrency(curr: Mode) {
    selectedCurrency = curr;
    volumeCount = currencyRates[curr].base;
  }
</script>

<section class="pt-16 pb-16 border-b border-[#e2e8f0] bg-white relative overflow-hidden">
  
  <div class="strict-grid-container text-center max-w-5xl mx-auto relative z-10">
    
    <!-- Top Eyebrow Tag -->
    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#cbd5e1] bg-[#f8fafc] mb-6 shadow-sm">
      <span class="w-2 h-2 rounded-full bg-[var(--cb-azure-500)] animate-pulse"></span>
      <span class="font-mono text-xs text-[var(--cb-cobalt-500)] font-semibold tracking-wider uppercase">
        _CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD • MST: 0315397327/
      </span>
    </div>

    <h1 class="hero-title mb-6 text-[#090e1f] max-w-4xl mx-auto text-3xl sm:text-5xl font-bold tracking-tight">
      Phần Mềm May Đo, RustSale CRM, Kelvot ERP & Lemy Finest Tinh Dầu
    </h1>

    <p class="text-base sm:text-lg md:text-xl leading-relaxed text-[#475569] mb-10 max-w-3xl mx-auto font-normal">
      Hệ sinh thái công nghệ và trải nghiệm không gian toàn diện: Viết phần mềm may đo & Cho thuê nhân sự IT (ngành nghề chính theo ĐKKD), phần mềm độc quyền <strong class="text-[var(--cb-cobalt-600)]">RustSale CRM Omnichannel</strong>, thương hiệu <strong class="text-[var(--cb-cobalt-600)]">Kelvot ERP</strong> sản xuất kho bãi, và giải pháp tiếp thị mùi hương <strong class="text-[var(--cb-cobalt-600)]">Lemy Finest</strong>.
    </p>

    <!-- CTAs -->
    <div class="flex items-center justify-center gap-3 mb-14 flex-wrap">
      <button 
        type="button" 
        onclick={onOpenDemo}
        class="btn-cta-primary min-w-[200px] cursor-pointer"
      >
        ĐĂNG KÝ TƯ VẤN DOANH NGHIỆP
      </button>

      <a 
        href="/products/rustsale" 
        class="inline-flex items-center justify-center gap-1.5 px-5 h-10 rounded font-mono text-xs font-semibold bg-[#edf2ff] text-[var(--cb-cobalt-600)] border border-[#c2d2fc] hover:bg-[var(--cb-cobalt-500)] hover:text-white transition-all shadow-xs"
      >
        <span>RUSTSALE CRM (RUST NATIVE)</span>
        <span>→</span>
      </a>

      <a href="#why" class="btn-cta-outline min-w-[170px]">
        KHÁM PHÁ 5 LĨNH VỰC
      </a>
    </div>

    <!-- Centerpiece: Live Volume Processed Card -->
    <div class="grid-ring max-w-3xl mx-auto p-6 sm:p-7 rounded-lg border border-[#cbd5e1] text-left bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
      
      <!-- Card Top Bar -->
      <div class="flex flex-wrap items-center justify-between border-b border-[#e2e8f0] pb-3.5 mb-5 gap-3">
        <div class="flex items-center gap-2">
          <span class="font-mono text-xs tracking-wider text-[#475569] font-medium">GIÁM SÁT HỆ SINH THÁI • REAL-TIME</span>
          <span class="text-[#cbd5e1]">|</span>
          <!-- Currency Switcher -->
          <div class="flex items-center gap-1 bg-[#f1f5f9] p-0.5 rounded border border-[#e2e8f0] font-mono text-[0.6875rem]">
            {#each (['VND', 'USD', 'EUR', 'DỰ ÁN'] as const) as curr}
              <button
                type="button"
                onclick={() => setCurrency(curr)}
                class="px-2 py-0.5 rounded transition-colors {selectedCurrency === curr ? 'bg-[var(--cb-azure-500)] text-white font-bold' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                {curr}
              </button>
            {/each}
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 font-mono text-xs text-[var(--cb-emerald-500)]">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)] animate-ping inline-flex"></span>
            <span class="font-semibold">HỆ THỐNG ĐANG HOẠT ĐỘNG</span>
          </div>
          <button
            type="button"
            onclick={triggerSimulation}
            disabled={isSimulating}
            class="font-mono text-[0.6875rem] px-2.5 py-1 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[var(--cb-cobalt-500)] hover:bg-[#e2e8f0] transition-all flex items-center gap-1 cursor-pointer font-medium"
            title="Mô phỏng luồng vận hành"
          >
            <RefreshCw size={11} class={isSimulating ? 'animate-spin' : ''} />
            <span>Mô phỏng luồng</span>
          </button>
        </div>
      </div>

      <!-- Volume Metric Display -->
      <div class="mb-5">
        <div class="font-mono text-xs text-[#64748b] uppercase tracking-wider mb-1">Quy mô giải pháp bàn giao & giá trị phục vụ</div>
        <div class="font-mono text-3xl sm:text-4xl font-bold text-[#090e1f] tracking-tight flex items-baseline gap-2">
          <span>{currencyRates[selectedCurrency].symbol}{volumeCount.toLocaleString('vi-VN')}{currencyRates[selectedCurrency].suffix}</span>
        </div>
      </div>

      <!-- Transaction Feed Row -->
      <div class="border-t border-[#e2e8f0] pt-4 flex flex-col gap-2.5">
        <div class="font-mono text-[0.6875rem] text-[#64748b] uppercase tracking-widest mb-1 flex justify-between">
          <span>Nhật ký triển khai & cung ứng gần nhất</span>
          <span>Chứng nhận chất lượng CreditBird</span>
        </div>
        
        {#each transactions as tx (tx.id)}
          <div class="font-mono text-xs text-[#475569] grid grid-cols-1 sm:grid-cols-3 gap-1.5 py-2 px-3 rounded bg-[#f8fafc] border border-[#e2e8f0] items-center hover:border-[var(--cb-azure-500)] transition-colors">
            <div class="truncate">
              <span class="text-[#94a3b8]">ĐỐI TÁC:</span> <span class="text-[#090e1f] font-medium">{tx.source}</span>
            </div>
            <div class="truncate">
              <span class="text-[#94a3b8]">PHÂN HỆ:</span> <span class="text-[var(--cb-cobalt-500)] font-medium">{tx.dest}</span>
            </div>
            <div class="sm:text-right text-[var(--cb-emerald-500)] font-semibold flex items-center justify-between sm:justify-end gap-2">
              <span>{tx.amount}</span>
              <span class="text-[0.625rem] text-[#94a3b8]">{tx.time}</span>
            </div>
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
