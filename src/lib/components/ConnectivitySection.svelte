<script lang="ts">
  import { Network, ArrowRight, Check } from 'lucide-svelte';

  type Provider = 'SOFTWARE' | 'RUSTSALE' | 'IT_STAFF' | 'KELVOT_ERP' | 'LEMY_FINEST';

  let selectedProvider = $state<Provider>('SOFTWARE');

  const providerDetails: Record<Provider, {
    name: string;
    rawPayload: string;
    normalizedModel: string;
    rail: string;
    speed: string;
  }> = {
    SOFTWARE: {
      name: 'Phần mềm May đo',
      rawPayload: '{"client": "Enterprise_Corp", "arch": "Microservices", "frontend": "SvelteKit", "code": "100% Full Source"}',
      normalizedModel: '{"id": "cb_soft_101", "service": "Custom_Software", "repo": "creditbird/clean-core", "state": "PRODUCTION"}',
      rail: 'May đo Microservices & Clean Architecture',
      speed: 'Độ trễ API < 20ms'
    },
    RUSTSALE: {
      name: 'RustSale CRM',
      rawPayload: '{"desktop_os": "Windows/macOS/Linux", "channels": ["Zalo", "WhatsApp", "Facebook"], "engine": "Rust Native"}',
      normalizedModel: '{"id": "cb_crm_202", "product": "RustSale_CRM_Pro", "keyring": "Local_Encrypted", "state": "STREAMING"}',
      rail: 'Desktop CRM Đa kênh Omnichannel',
      speed: 'Tốc độ microsecond (< 15ms)'
    },
    IT_STAFF: {
      name: 'Nhân sự IT',
      rawPayload: '{"squad": "Senior_Engineers", "roles": ["Tech Lead", "Backend", "DevOps"], "model": "Onsite/Remote"}',
      normalizedModel: '{"id": "cb_hr_303", "sla": "48h_Onboard", "trial": "14_days", "nda": "Signed", "state": "ACTIVE"}',
      rail: 'Cung ứng Kỹ sư IT & Squad Chuyên trách',
      speed: 'Onboard trong 48 giờ'
    },
    KELVOT_ERP: {
      name: 'Kelvot ERP',
      rawPayload: '{"portal": "kelvot.com", "bom_stages": 4, "wms_sync": "Barcode_Scanner", "accounting": "VAS_IFRS"}',
      normalizedModel: '{"id": "cb_erp_404", "system": "Kelvot_ERP_v2", "mrp": "Multi_BOM", "state": "COMMITTED"}',
      rail: 'ERP Sản xuất, Kho WMS & Kế toán',
      speed: 'Đồng bộ thời gian thực'
    },
    LEMY_FINEST: {
      name: 'Lemy Finest Scent',
      rawPayload: '{"portal": "lemyfinest.com", "diffuser": "HVAC_Nano_ColdAir", "coverage": "5000m3", "oil_cert": "COA/GC-MS"}',
      normalizedModel: '{"id": "cb_scent_505", "brand": "Lemy_Finest", "hardware": "IoT_HVAC_v4", "state": "DIFFUSING"}',
      rail: 'Scent Marketing & Máy phun HVAC',
      speed: 'Khuếch tán Nano 24/7'
    }
  };

  const providers: Provider[] = ['SOFTWARE', 'RUSTSALE', 'IT_STAFF', 'KELVOT_ERP', 'LEMY_FINEST'];
</script>

<section id="connectivity" class="py-20 border-b border-[#e2e8f0] bg-white">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Text Description (Left 5 Cols) -->
      <div class="lg:col-span-5">
        <span class="snap-badge mb-3">_TÍCH HỢP TOÀN DIỆN/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Kết nối Đồng bộ Mọi Nền tảng</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">Một hệ sinh thái vững chắc cho Phần mềm, CRM, ERP, IT và Mùi hương.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          CreditBird kết nối hài hòa giữa phần mềm may đo, RustSale CRM desktop siêu tốc, Kelvot ERP quản trị nguồn lực, đội ngũ kỹ sư IT phái cử và giải pháp trải nghiệm khách hàng Lemy Finest Scent. Toàn bộ dữ liệu được quản trị chuẩn hóa và minh bạch.
        </p>

        <!-- Provider Switcher Buttons -->
        <div class="flex flex-wrap gap-2 mb-6">
          {#each providers as prov}
            <button
              type="button"
              onclick={() => selectedProvider = prov}
              class="font-mono text-xs px-3 py-2 rounded border transition-all cursor-pointer {selectedProvider === prov ? 'bg-[var(--cb-cobalt-500)] text-white border-[var(--cb-cobalt-500)] font-semibold shadow-sm' : 'bg-white text-[#475569] border-[#cbd5e1] hover:border-[var(--cb-azure-500)]'}"
            >
              {providerDetails[prov].name}
            </button>
          {/each}
        </div>

        <div class="p-4 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] font-mono text-xs">
          <div class="text-[#64748b] mb-1">RAIL TYPE: <span class="text-[#090e1f]">{providerDetails[selectedProvider].rail}</span></div>
          <div class="text-[#64748b]">SETTLEMENT VELOCITY: <span class="text-[var(--cb-emerald-500)] font-bold">{providerDetails[selectedProvider].speed}</span></div>
        </div>
      </div>

      <!-- Convergence Schematic (Right 7 Cols) -->
      <div class="lg:col-span-7">
        <div class="bg-white border border-[#cbd5e1] rounded-lg p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
            
            <!-- Left Rails Stack -->
            <div class="flex flex-col gap-2 w-full sm:w-40 flex-shrink-0">
              {#each providers as p}
                <button
                  type="button"
                  onclick={() => selectedProvider = p}
                  class="h-9 border rounded px-3 flex items-center justify-between font-mono text-[11px] font-semibold transition-all cursor-pointer {selectedProvider === p ? 'border-[var(--cb-azure-500)] bg-[rgba(50,135,255,0.08)] text-[var(--cb-azure-600)] shadow-sm' : 'border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] hover:bg-white'}"
                >
                  <span class="truncate">{providerDetails[p].name}</span>
                  {#if selectedProvider === p}
                    <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-azure-500)] shrink-0"></span>
                  {/if}
                </button>
              {/each}
            </div>

            <!-- Animated Convergence Vector Graphic -->
            <div class="hidden sm:flex w-20 h-52 items-center justify-center relative">
              <svg class="w-full h-full" viewBox="0 0 80 208" fill="none">
                <path d="M 0 18 C 40 18, 40 104, 80 104" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 61 C 40 61, 40 104, 80 104" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 104 L 80 104" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 147 C 40 147, 40 104, 80 104" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 0 190 C 40 190, 40 104, 80 104" stroke="#cbd5e1" stroke-width="1.5"/>
                <!-- Pulse animation line -->
                <path class="circuit-pulse" d="M 0 104 L 80 104" stroke="var(--cb-azure-500)" stroke-width="2"/>
              </svg>
            </div>

            <!-- Right: Single Unified Credit Model Card -->
            <div class="flex-1 w-full border border-[var(--cb-azure-500)] rounded-lg bg-[#070e24] p-4 text-[#f8fafc] shadow-lg">
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-[rgba(50,135,255,0.2)] font-mono text-xs">
                <span class="text-[var(--cb-azure-400)] font-bold">creditbird_bus (Normalized)</span>
                <span class="text-[var(--cb-emerald-500)] flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-emerald-500)]"></span>
                  SYNCD
                </span>
              </div>
              
              <div class="font-mono text-xs leading-relaxed text-[#cbd5e1] overflow-x-auto bg-[#030612] p-3 rounded border border-[rgba(50,135,255,0.1)]">
                <pre class="m-0"><code>{JSON.stringify(JSON.parse(providerDetails[selectedProvider].normalizedModel), null, 2)}</code></pre>
              </div>
              <div class="mt-2.5 font-mono text-[0.6875rem] text-[#94a3b8] flex justify-between">
                <span>Schema: standard/v2.1</span>
                <span>Type: Unified Enterprise Bus</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>
