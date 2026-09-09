<script lang="ts">
  import { Play, CheckCircle2, Clock, GitBranch } from 'lucide-svelte';

  let currentStep = $state(2);

  const workflowSteps = [
    { num: 1, name: 'Khảo sát Kiến trúc & Đánh giá Khả thi AI', status: 'COMPLETED', time: 'Phản hồi 24h', provider: 'Solution Architecture & AI Lab' },
    { num: 2, name: 'Lập trình May đo & Tăng tốc với AI Pair', status: 'IN_PROGRESS', time: 'Sprint 2 tuần', provider: 'Senior Engineering Division' },
    { num: 3, name: 'Tích hợp Phân hệ Nghiệp vụ & AI Agent', status: 'PENDING', time: 'Private Cloud / On-Prem', provider: 'Core Systems & AI Squad' },
    { num: 4, name: 'Kiểm thử Tự động CI/CD & Quét An ninh AI', status: 'PENDING', time: 'Zero-Downtime Gate', provider: 'DevSecOps & QA Automation' },
    { num: 5, name: 'Bàn giao 100% Source Code & Bảo hành SLA 24/7', status: 'PENDING', time: 'Bảo hành dài hạn', provider: 'Customer Success & Support Services' }
  ];

  function nextStep() {
    currentStep = (currentStep % 5) + 1;
  }
</script>

<section id="delivery-pipeline" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc] scroll-mt-20">
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
            <pre class="m-0 font-mono"><code><span class="text-[var(--cb-cobalt-500)] font-bold">project:</span> enterprise_ai_and_software_delivery
<span class="text-[var(--cb-cobalt-500)] font-bold">pipeline:</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">stage_1_architecture:</span>
      <span class="text-[#64748b]">scope:</span> <span class="text-[#0f172a] font-bold">Domain_Driven_Design &amp; AI_Feasibility</span>
      <span class="text-[#64748b]">deliverable:</span> <span class="text-[var(--cb-cobalt-500)] font-bold">Architecture_Blueprint &amp; NDA (24h)</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">stage_2_ai_augmented_dev:</span>
      <span class="text-[#64748b]">methodology:</span> <span class="text-[#0f172a]">AI_Pair_Programming + Agile_Sprints</span>
      <span class="text-[#64748b]">velocity:</span> <span class="text-[var(--cb-emerald-500)] font-bold">2x_Faster_Delivery_Cycle</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">stage_3_intelligent_modules:</span>
      <span class="text-[#64748b]">core_engine:</span> <span class="text-[#0f172a]">Custom_Microservices + Enterprise_RAG</span>
      <span class="text-[#64748b]">security:</span> <span class="text-[#0f172a]">Zero_Trust &amp; Private_Cloud_Ready</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">stage_4_automated_qa:</span>
      <span class="text-[#64748b]">pipeline:</span> <span class="text-[#0f172a]">CI_CD_Automated_Testing &amp; Pentest</span>
      <span class="text-[#64748b]">code_coverage:</span> <span class="text-[var(--cb-cobalt-500)] font-bold">&gt; 90% Unit_and_E2E_Test</span>
  - <span class="text-[var(--cb-cobalt-500)] font-bold">stage_5_handover:</span>
      <span class="text-[#64748b]">deliverables:</span> <span class="text-[var(--cb-cobalt-500)] font-bold">100% Full Source Code &amp; AI Weights</span>
      <span class="text-[#64748b]">warranty:</span> <span class="text-[#0f172a]">SLA_24_7 &amp; Continuous_Maintenance</span></code></pre>
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
        <span class="snap-badge mb-3">_QUY TRÌNH KỸ THUẬT &amp; AI/</span>
        <h2 class="section-title text-[#090e1f] mb-3">Vận hành Chuẩn mực &amp; Tăng tốc với AI</h2>
        <p class="text-xl font-medium text-[#090e1f] mb-3">Quy trình phát triển phần mềm may đo tăng tốc với AI và kiểm thử tự động.</p>
        <p class="text-[#475569] text-base leading-relaxed mb-6">
          Từ khảo sát kiến trúc hệ thống, lập trình tăng tốc với AI Pair-Programming đến tích hợp các phân hệ AI Agent thông minh và bảo mật cấp Enterprise — CreditBird cam kết bàn giao 100% Full Source Code, tài liệu kỹ thuật chuẩn mực và bảo hành SLA 24/7 theo hợp đồng.
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
