<script lang="ts">
  import { Copy, Check, Play, Terminal, Database, Sparkles, Layers, Users, Wind } from 'lucide-svelte';

  type ScriptTab = 'rustsale' | 'kelvot' | 'staffing' | 'lemyfinest';

  let activeTab = $state<ScriptTab>('rustsale');
  let copied = $state(false);
  let isExecuting = $state(false);
  let executionResult = $state<{
    txId: string;
    postings: { from: string; to: string; asset: string; amount: string }[];
    balances: { account: string; delta: string }[];
  } | null>(null);

  const scriptExamples = {
    rustsale: {
      filename: 'rustsale_omnichannel.rs',
      title: 'RustSale CRM — Động cơ Hội tụ Đa kênh (Rust Native)',
      code: `// RustSale CRM & Outreach Pro: Microsecond Event Loop
pub async fn handle_inbox_event(event: OmnichannelEvent) -> Result<SyncAck, EngineError> {
    match event {
        OmnichannelEvent::ZaloMessage { sender, text } => {
            keyring_vault::verify_signature(&sender)?;
            crm_pipeline::auto_tag_lead(&sender, "ZALO_INBOUND").await?;
            desktop_inbox::push_stream(Channel::Zalo, sender, text).await
        },
        OmnichannelEvent::WhatsAppB2B { phone, payload } => {
            crm_pipeline::link_won_contact(&phone, payload).await?;
            desktop_inbox::push_stream(Channel::WhatsApp, phone, payload).await
        },
        OmnichannelEvent::FacebookHub { page_id, comment } => {
            fanpage_ai::auto_reply(page_id, comment).await
        }
    }
}
// Độ trễ < 1ms, không rò rỉ bộ nhớ, bảo mật Local-First`,
      postings: [
        { from: '@zalo:khach_hang_b2b', to: '@rustsale:inbox_hub', asset: 'MSG', amount: '1 tin nhắn mới' },
        { from: '@whatsapp:doanh_nghiep_fdi', to: '@rustsale:won_contacts', asset: 'PO', amount: 'Đã gắn tag VIP' },
        { from: '@facebook:fanpage_chinh', to: '@rustsale:kanban_pipeline', asset: 'LEAD', amount: 'Tự động gán Sales' }
      ],
      balances: [
        { account: '@rustsale:latency', delta: '0.42 ms (Microsecond)' },
        { account: '@rustsale:ram_usage', delta: '38.4 MB (Tauri v2)' },
        { account: '@rustsale:security', delta: 'AES-256 Keyring Valid' }
      ]
    },
    kelvot: {
      filename: 'kelvot_bom_production.yaml',
      title: 'Kelvot ERP — Định mức BOM Sản xuất & Kho WMS',
      code: `kelvot_production_ledger:
  order_id: "PO-2026-MFG-08"
  bom_version: "BOM_MOTOR_V3_MULTI_LEVEL"
  routing:
    - station_1: "Dập khuôn thép tấm (NVL: Thép lá cán nguội)"
    - station_2: "Gia công CNC & Quấn dây đồng tự động"
    - station_3: "Lắp ráp cụm chi tiết & Kiểm định QA/QC"
  accounting_sync:
    debit: "TK_154 (Chi phí sản xuất dở dang)"
    credit: "TK_152 (Nguyên vật liệu xuất kho WMS)"
    vas_standard: "Thong_tu_200_Bo_Tai_Chinh"`,
      postings: [
        { from: '@kho_nguyen_lieu_wms', to: '@chuyen_san_xuat_1', asset: 'THEP_TAM', amount: '12.5 Tấn' },
        { from: '@chuyen_san_xuat_1', to: '@kho_thanh_pham_wms', asset: 'DONG_CO_DIESEL', amount: '85 Bộ' },
        { from: '@tai_chinh:tk_154', to: '@ke_toan:gia_thanh_vas', asset: 'VND', amount: '+450,000,000' }
      ],
      balances: [
        { account: '@kelvot:bom_accuracy', delta: '99.8% Không sai sót' },
        { account: '@kelvot:wms_barcode', delta: 'Real-time FIFO Scan' },
        { account: '@kelvot:accounting', delta: 'Bút toán VAS tự động' }
      ]
    },
    staffing: {
      filename: 'it_staff_allocation.yaml',
      title: 'Cung Ứng Nhân Sự IT — Senior Onsite & Dedicated Squad',
      code: `it_staff_augmentation_contract:
  contract_ref: "CREDITBIRD-HR-2026"
  tax_id: "0315397327"
  squad_allocation:
    - role: "Senior Backend (Rust / Golang)"
      fte: 2
      sla_onboarding: "48_hours"
    - role: "Senior Frontend (SvelteKit / React)"
      fte: 1
      sla_onboarding: "48_hours"
    - role: "DevOps & Cloud Security Architect"
      fte: 1
      certifications: ["CKA", "AWS_Solutions_Architect"]
  legal_nda: "B2B Intellectual Property Non-Disclosure Agreement Signed"`,
      postings: [
        { from: '@creditbird:talent_pool', to: '@khach_hang:onsite_office', asset: 'KỸ_SƯ_RUST', amount: '2 Senior Devs' },
        { from: '@creditbird:talent_pool', to: '@khach_hang:dedicated_team', asset: 'SVELTE_DEV', amount: '1 Senior Dev' },
        { from: '@creditbird:talent_pool', to: '@khach_hang:cloud_infra', asset: 'DEVOPS_ARCH', amount: '1 Architect' }
      ],
      balances: [
        { account: '@it_staff:onboarding', delta: '48h Bàn giao việc' },
        { account: '@it_staff:trial_period', delta: '14 Ngày thử việc miễn phí' },
        { account: '@it_staff:nda_legal', delta: '100% Bảo mật quyền sở hữu' }
      ]
    },
    lemyfinest: {
      filename: 'lemyfinest_hvac_iot.yaml',
      title: 'Lemy Finest — Lập Lịch Máy Phun Tinh Dầu HVAC Thông Minh',
      code: `lemyfinest_scent_marketing:
  brand: "LEMY FINEST (lemyfinest.com)"
  hardware: "Diffuser_HVAC_Industrial_Pro_5000"
  space_coverage: "5,000 m² (Hệ thống ống gió điều hòa trung tâm)"
  essential_oil:
    name: "White Tea & Bergamot Luxury Signature"
    certification: "COA & GC-MS Certified 100% Pure Natural"
  iot_scheduler:
    active_days: "Monday - Sunday"
    operating_hours: "07:30 - 21:30"
    burst_cycle: "60s Phun / 120s Nghỉ (Mùi hương lan tỏa đồng đều)"`,
      postings: [
        { from: '@lemyfinest:kho_tinh_dau', to: '@may_phun_hvac_toa_nha', asset: 'TINH_DAU_COA', amount: '2,500 ml' },
        { from: '@may_phun_hvac_toa_nha', to: '@khong_gian:sanh_va_van_phong', asset: 'HƯƠNG_THƠM', amount: '5,000 m² phủ đều' }
      ],
      balances: [
        { account: '@lemyfinest:purity', delta: '100% Thiên nhiên COA' },
        { account: '@lemyfinest:hardware', delta: 'Bảo hành 24 tháng chính hãng' },
        { account: '@lemyfinest:maintenance', delta: 'Bảo trì & refill định kỳ tận nơi' }
      ]
    }
  };

  function copyCode() {
    navigator.clipboard.writeText(scriptExamples[activeTab].code);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  function simulateExecution() {
    isExecuting = true;
    executionResult = null;
    setTimeout(() => {
      isExecuting = false;
      executionResult = {
        txId: `sim_${Math.random().toString(36).substring(2, 8)}`,
        postings: scriptExamples[activeTab].postings,
        balances: scriptExamples[activeTab].balances
      };
    }, 600);
  }
</script>

<section id="code-ledger" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc]">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Text Description (Left 5 Cols) -->
      <div class="lg:col-span-5">
        <span class="snap-badge mb-3">_KIẾN TRÚC MÃ NGUỒN & HỆ THỐNG / SANDBOX</span>
        <h2 class="section-title text-[#090e1f] mb-4">Trực Quan Hóa Quy Trình Vận Hành Kỹ Thuật</h2>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Mỗi phân hệ tại CreditBird được chuẩn hóa bằng mã nguồn tối ưu, cấu hình rõ ràng và tích hợp liên thông: từ động cơ Rust Native của RustSale CRM, định mức sản xuất Kelvot ERP, luồng phái cử nhân sự IT đến cơ chế phun sương Nano HVAC của Lemy Finest.
        </p>

        <!-- Script Features List -->
        <div class="flex flex-col gap-3 font-mono text-xs text-[#475569] mb-8">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span><strong>RustSale CRM:</strong> Tốc độ microsecond, đồng bộ Zalo / WhatsApp / FB</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span><strong>Kelvot ERP:</strong> Định mức BOM đa cấp, kho WMS Barcode, chuẩn VAS</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span><strong>Nhân sự IT:</strong> Senior Developers onboard trong 48h, cam kết NDA B2B</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-cobalt-500)]"></span>
            <span><strong>Lemy Finest:</strong> 100% Tinh dầu COA / GC-MS & Máy phun HVAC 5.000m²</span>
          </div>
        </div>

        <button 
          type="button"
          onclick={simulateExecution}
          disabled={isExecuting}
          class="btn-cta-primary !h-11 cursor-pointer flex items-center gap-2"
        >
          <Play size={14} class={isExecuting ? 'animate-spin' : ''} />
          <span>{isExecuting ? 'Đang kiểm tra luồng...' : 'Chạy mô phỏng hệ thống'}</span>
        </button>
      </div>

      <!-- Code & Execution Sandbox (Right 7 Cols) -->
      <div class="lg:col-span-7">
        <div class="code-card border border-[#cbd5e1] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
          
          <!-- Editor Header with Tabs -->
          <div class="bg-[#f1f5f9] border-b border-[#e2e8f0] px-4 py-2 flex items-center justify-between flex-wrap gap-2">
            
            <!-- File Tabs -->
            <div class="flex items-center gap-1 flex-wrap">
              <button
                type="button"
                onclick={() => { activeTab = 'rustsale'; executionResult = null; }}
                class="font-mono text-xs px-2.5 py-1.5 rounded transition-colors {activeTab === 'rustsale' ? 'bg-white text-[var(--cb-cobalt-600)] font-bold shadow-sm border border-[var(--cb-cobalt-500)]/30' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                rustsale_inbox.rs
              </button>
              <button
                type="button"
                onclick={() => { activeTab = 'kelvot'; executionResult = null; }}
                class="font-mono text-xs px-2.5 py-1.5 rounded transition-colors {activeTab === 'kelvot' ? 'bg-white text-[var(--cb-cobalt-600)] font-bold shadow-sm border border-[var(--cb-cobalt-500)]/30' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                kelvot_bom.yaml
              </button>
              <button
                type="button"
                onclick={() => { activeTab = 'staffing'; executionResult = null; }}
                class="font-mono text-xs px-2.5 py-1.5 rounded transition-colors {activeTab === 'staffing' ? 'bg-white text-[var(--cb-cobalt-600)] font-bold shadow-sm border border-[var(--cb-cobalt-500)]/30' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                it_staffing_sla.yaml
              </button>
              <button
                type="button"
                onclick={() => { activeTab = 'lemyfinest'; executionResult = null; }}
                class="font-mono text-xs px-2.5 py-1.5 rounded transition-colors {activeTab === 'lemyfinest' ? 'bg-white text-[var(--cb-cobalt-600)] font-bold shadow-sm border border-[var(--cb-cobalt-500)]/30' : 'text-[#64748b] hover:text-[#090e1f]'}"
              >
                lemyfinest_hvac.yaml
              </button>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <button 
                type="button"
                onclick={copyCode}
                class="flex items-center gap-1 font-mono text-xs text-[#64748b] hover:text-[#090e1f] transition-colors cursor-pointer"
                title="Sao chép đoạn mã"
              >
                {#if copied}
                  <Check size={13} class="text-[var(--cb-emerald-500)]" />
                  <span class="text-[var(--cb-emerald-500)]">Đã copy</span>
                {:else}
                  <Copy size={13} />
                  <span>Copy</span>
                {/if}
              </button>
            </div>
          </div>

          <!-- Code Window Body -->
          <div class="p-5 font-mono text-[0.8125rem] leading-relaxed bg-[#f8fafc] text-[#1e293b] border-b border-[#e2e8f0] overflow-x-auto max-h-[300px] overflow-y-auto">
            <pre class="m-0 font-mono"><code>{scriptExamples[activeTab].code}</code></pre>
          </div>

          <!-- Interactive Results Container -->
          {#if executionResult}
            <div class="p-5 bg-white font-mono text-xs">
              <div class="flex items-center justify-between border-b border-[#e2e8f0] pb-2 mb-3">
                <div class="flex items-center gap-1.5 text-[var(--cb-emerald-600)] font-semibold">
                  <Check size={14} />
                  <span>XỬ LÝ THÀNH CÔNG • {executionResult.txId}</span>
                </div>
                <span class="text-[#94a3b8]">Đồng bộ dữ liệu thời gian thực</span>
              </div>

              <!-- Postings Table -->
              <div class="flex flex-col gap-2 mb-3">
                {#each executionResult.postings as p}
                  <div class="flex flex-wrap items-center justify-between text-[#475569] py-1 border-b border-[#f1f5f9] last:border-0">
                    <div class="flex items-center gap-2">
                      <span class="text-[var(--cb-cobalt-600)]">{p.from}</span>
                      <span class="text-[#94a3b8]">→</span>
                      <span class="text-[#090e1f] font-medium">{p.to}</span>
                    </div>
                    <span class="text-[var(--cb-emerald-600)] font-semibold">{p.amount} {p.asset}</span>
                  </div>
                {/each}
              </div>

              <!-- Delta Balance summary -->
              <div class="pt-2 border-t border-[#e2e8f0] flex flex-wrap gap-4 text-[#64748b]">
                {#each executionResult.balances as b}
                  <div>
                    <span>{b.account}:</span>
                    <strong class="text-[#090e1f] ml-1">{b.delta}</strong>
                  </div>
                {/each}
              </div>
            </div>
          {/if}

        </div>
      </div>

    </div>
  </div>
</section>
