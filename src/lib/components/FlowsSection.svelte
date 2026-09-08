<script lang="ts">
  import { Play, CheckCircle2, Clock, GitBranch } from 'lucide-svelte';

  let currentStep = $state(2);

  const workflowSteps = [
    { num: 1, name: 'Khảo sát Yêu cầu & Ký Hợp đồng NDA', status: 'COMPLETED', time: '24h', provider: 'CreditBird Solution Architects' },
    { num: 2, name: 'Lập trình May đo & Phái cử IT Squad', status: 'IN_PROGRESS', time: '48h Onboard', provider: 'Engineering Division' },
    { num: 3, name: 'Triển khai RustSale CRM & Kelvot ERP', status: 'PENDING', time: 'Agile Sprints', provider: 'Product & ERP Specialists' },
    { num: 4, name: 'Lắp đặt Lemy Finest HVAC & Tinh dầu COA', status: 'PENDING', time: 'Đúng tiến độ', provider: 'Scent Engineering Lab' },
    { num: 5, name: 'Bàn giao Full Code & Bảo trì SLA 24/7', status: 'PENDING', time: 'Cam kết SLA', provider: 'QA & Support Services' }
  ];

  function nextStep() {
    currentStep = (currentStep % 5) + 1;
  }
</script>

<section id="flows" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc]">
  <div class="strict-grid-container">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Code Card (Left 6 Cols) -->
      <div class="lg:col-span-6 order-2 lg:order-1">
        <div class="code-card border border-[#cbd5e1] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
          <div class="code-card-header bg-[#f1f5f9] border-b border-[#e2e8f0] px-4 py-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <GitBranch size={14} class="text-[var(--cb-cobalt-500)]" />
              <span class="font-mono text-xs text-[#475569] font-medium">project_workflow.yaml</span>
            </div>
            <div class="flex gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-[var(--cb-azure-500)]"></span>
            </div>
          </div>

          <div class="p-5 font-mono text-[0.8125rem] leading-relaxed bg-[#f8fafc] text-[#1e293b]">
            <pre class="m-0 font-mono"><code><span class="text-[var(--cb-cobalt-500)] font-bold">project:</span> creditbird_enterprise_solutions
<span class="text-[var(--cb-cobalt-500)] font-bold">stages:</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">software:</span>
      <span class="text-[#64748b]">scope:</span> <span class="text-[#0f172a] font-bold">Custom_Microservices_Web_App</span>
      <span class="text-[#64748b]">deliverable:</span> <span class="text-[var(--cb-cobalt-500)] font-bold">100% Full Source Code</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">rustsale_crm:</span>
      <span class="text-[#64748b]">engine:</span> <span class="text-[#0f172a]">Rust Native Desktop (Zalo/WA/FB)</span>
      <span class="text-[#64748b]">latency:</span> <span class="text-[var(--cb-emerald-500)] font-bold">&lt; 15ms Local-First</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">it_staffing:</span>
      <span class="text-[#64748b]">model:</span> <span class="text-[#0f172a]">Senior Tech Lead + Backend + DevOps</span>
      <span class="text-[#64748b]">onboarding_sla:</span> <span class="text-[#0f172a]">48_hours (Trial 14 days)</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">kelvot_erp:</span>
      <span class="text-[#64748b]">portal:</span> <span class="text-[#0f172a]">https://kelvot.com</span>
      <span class="text-[#64748b]">modules:</span> <span class="text-[#0f172a]">Multi-BOM &amp; WMS Barcode</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">lemyfinest_scent:</span>
      <span class="text-[#64748b]">portal:</span> <span class="text-[#0f172a]">https://www.lemyfinest.com</span>
      <span class="text-[#64748b]">hardware:</span> <span class="text-[#0f172a]">HVAC Cold-Air Diffusers &amp; COA Oil</span></code></pre>
          </div>

          <!-- Interactive Step Controller Bar -->
          <div class="bg-[#f1f5f9] border-t border-[#e2e8f0] p-4 flex items-center justify-between">
            <div class="font-mono text-xs text-[#64748b]">
              Tiến độ giai đoạn: <span class="text-[var(--cb-cobalt-500)] font-bold">Bước {currentStep} / 5</span>
            </div>
            <button
              type="button"
              onclick={nextStep}
              class="font-mono text-xs px-3 py-1.5 rounded bg-[var(--cb-cobalt-500)] text-white hover:bg-[var(--cb-azure-600)] transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>Chuyển bước kế tiếp</span>
              <Play size={11} />
            </button>
          </div>
        </div>
      </div>

      <!-- Text & Interactive Step Progression (Right 6 Cols) -->
      <div class="lg:col-span-6 order-1 lg:order-2">
        <span class="snap-badge mb-3">_ĐIỀU PHỐI DỰ ÁN/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Vận hành Chuẩn mực</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">Quy trình điều phối dự án thông minh và minh bạch.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Từ các dự án phát triển phần mềm ERP phức tạp, phái cử nhân sự công nghệ chất lượng cao đến triển khai hệ thống máy phun tinh dầu tự động thông minh cho các chuỗi cơ sở — CreditBird luôn đảm bảo tính đồng bộ, báo cáo thời gian thực và cam kết SLA theo hợp đồng.
        </p>

        <!-- Dynamic Step Cards -->
        <div class="flex flex-col gap-2.5">
          {#each workflowSteps as step}
            <div class="p-3.5 rounded-lg border transition-all flex items-center justify-between {step.num === currentStep ? 'bg-white border-[var(--cb-cobalt-500)] shadow-sm' : step.num < currentStep ? 'bg-white border-[#e2e8f0]' : 'bg-[#fafafa] border-[#e2e8f0] opacity-60'}">
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center {step.num < currentStep ? 'bg-[var(--cb-emerald-500)] text-white' : step.num === currentStep ? 'bg-[var(--cb-cobalt-500)] text-white' : 'bg-[#cbd5e1] text-[#64748b]'}">
                  {step.num < currentStep ? '✓' : step.num}
                </span>
                <div>
                  <div class="text-sm font-semibold text-[#1e293b]">{step.name}</div>
                  <div class="font-mono text-[0.6875rem] text-[#64748b]">Đơn vị: {step.provider}</div>
                </div>
              </div>
              <div class="text-right">
                <span class="font-mono text-xs font-semibold {step.num < currentStep ? 'text-[var(--cb-emerald-500)]' : step.num === currentStep ? 'text-[var(--cb-cobalt-500)]' : 'text-[#94a3b8]'}">
                  {step.num < currentStep ? 'HOÀN TẤT' : step.num === currentStep ? 'ĐANG THỰC HIỆN' : 'CHỜ TRIỂN KHAI'}
                </span>
                <div class="font-mono text-[0.6875rem] text-[#94a3b8]">{step.time}</div>
              </div>
            </div>
          {/each}
        </div>

      </div>

    </div>
  </div>
</section>
