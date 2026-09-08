<script lang="ts">
  import { Check, Copy, Code2, Network, ArrowRight, Layers, Sliders } from 'lucide-svelte';

  type AccountNode = {
    id: string;
    label: string;
    type: 'ASSET' | 'LIABILITY' | 'CLEARING' | 'REVENUE';
    x: number;
    y: number;
    description: string;
    rule: string;
  };

  const nodes: AccountNode[] = [
    {
      id: 'world',
      label: 'Khách hàng / Doanh nghiệp',
      type: 'ASSET',
      x: 20,
      y: 155,
      description: 'Doanh nghiệp sản xuất, thương mại, chuỗi bán lẻ, khách sạn & spa.',
      rule: 'Khởi tạo bài toán chuyển đổi số, nhu cầu nhân sự IT hoặc giải pháp Scent Marketing.'
    },
    {
      id: 'buyer',
      label: 'Phần mềm May đo',
      type: 'LIABILITY',
      x: 190,
      y: 35,
      description: 'Web app, Mobile app, hệ thống xử lý dữ liệu lớn và cổng kết nối API.',
      rule: 'Lập trình riêng theo yêu cầu, giao diện UX/UI chuẩn mực, bảo mật cao.'
    },
    {
      id: 'marketplace',
      label: 'Hệ thống ERP Lõi',
      type: 'CLEARING',
      x: 180,
      y: 155,
      description: 'Phân hệ quản trị nguồn lực: Sản xuất (MRP), Kho (WMS), Kế toán (VAS), CRM.',
      rule: 'Đồng bộ hóa luồng dữ liệu trung tâm, kiểm soát thời gian thực và chống thất thoát.'
    },
    {
      id: 'seller',
      label: 'Nhân sự IT Chuyên trách',
      type: 'LIABILITY',
      x: 395,
      y: 35,
      description: 'Đội ngũ kỹ sư phần mềm, Solution Architect, DevOps, QA/QC phái cử.',
      rule: 'Bổ sung năng lực công nghệ tức thì trong 48h, làm việc theo SLA cam kết, thử việc 14 ngày.'
    },
    {
      id: 'fees',
      label: 'Máy phun & Tinh dầu',
      type: 'REVENUE',
      x: 430,
      y: 155,
      description: 'Máy khuếch tán Nano HVAC và bộ sưu tập tinh dầu thiên nhiên 100% COA.',
      rule: 'Kiến tạo không gian hương thơm đẳng cấp, nâng tầm nhận diện thương hiệu.'
    }
  ];

  let selectedNodeId = $state<string>('marketplace');
  let activeTab = $state<'visual' | 'yaml'>('visual');
  let copied = $state(false);

  let selectedNode = $derived(nodes.find(n => n.id === selectedNodeId) || nodes[2]);

  const yamlSchema = `creditbird_ecosystem:
  enterprise: "CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD"
  tax_id: "0315397327"
  
  core_verticals:
    - custom_software:
        scope: "May đo phần mềm & kiến trúc Microservices"
        stack: ["TypeScript", "Rust", "Go", "Docker"]
        ownership: "100% Full Source Code & Bản quyền"
    - rustsale_crm:
        name: "RustSale CRM & Outreach Pro"
        engine: "Rust Native Desktop App"
        channels: ["Zalo", "WhatsApp", "Facebook Messenger"]
        storage: "Local-First Keyring (< 15ms latency)"
        guide: "https://app.notion.com/p/RustSale-CRM-Outreach-Pro"
    - it_staff_augmentation:
        model: "Onsite & Dedicated Senior Squad"
        roles: ["Tech Lead", "Senior Backend", "DevOps", "QA/QC"]
        turnaround: "48h Onboarding (Thử việc 14 ngày, NDA)"
    - kelvot_erp:
        portal: "https://kelvot.com"
        modules: ["Production_Multi_BOM", "Warehouse_WMS_Barcode", "Accounting_VAS_IFRS"]
    - lemyfinest_scent_marketing:
        portal: "https://www.lemyfinest.com"
        hardware: "Cold-air Nano HVAC Diffusers (lên đến 5.000m³)"
        oil_compliance: "100% Pure Natural Essential Oils (COA & GC-MS)"`;

  function copyYaml() {
    navigator.clipboard?.writeText(yamlSchema);
    copied = true;
    setTimeout(() => { copied = false; }, 2000);
  }
</script>

<section id="schema-builder" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- Left Column: Copy & Specs -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <span class="snap-badge self-start">_SƠ ĐỒ HỆ SINH THÁI/</span>
        
        <h2 class="h3 text-[#090e1f]">Kiến trúc Tích hợp Đa dịch vụ</h2>
        
        <p class="subheading-md text-[#090e1f]">
          Mô hình hóa toàn diện chuỗi giá trị chuyển đổi số & trải nghiệm.
        </p>
        
        <p class="p-md text-[#475569] leading-relaxed">
          CreditBird liên kết mạch lạc giữa hạ tầng công nghệ (Phần mềm & ERP), nguồn nhân lực kỹ thuật (Cho thuê IT chuyên trách) và giải pháp nâng tầm không gian (Máy phun tinh dầu & Tinh dầu thiên nhiên) giúp tối đa hóa hiệu quả cho doanh nghiệp.
        </p>

        <div class="flex flex-col gap-3 font-mono text-xs text-[#334155] pt-2">
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">May đo Theo Đặc thù:</strong> Tùy biến chính xác theo quy mô và mô hình hoạt động của từng khách hàng, không phát sinh chi phí thừa thãi.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Đồng bộ Phần cứng & Phần mềm:</strong> Kết nối dữ liệu ERP với các thiết bị máy phun hương thông minh điều khiển qua IoT tự động.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[var(--cb-cobalt-500)] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Bảo chứng Pháp lý & Uy tín:</strong> Pháp nhân minh bạch, đăng ký kinh doanh đầy đủ và cam kết chất lượng theo hợp đồng dịch vụ.
            </div>
          </div>
        </div>

        <div class="pt-4 flex items-center gap-4">
          <a 
            href="#why" 
            class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cb-cobalt-500)] hover:underline font-medium"
          >
            <span>Tìm hiểu chi tiết giải pháp</span>
            <span aria-hidden="true" class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        </div>

      </div>

      <!-- Right Column: Interactive Schema & Flow Workbench -->
      <div class="lg:col-span-6">
        <div class="grid-ring bg-[#040816] text-[#e2e8f0] rounded-lg p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#1e293b] flex flex-col gap-4">
          
          <!-- Top Toolbar: Mode Tabs & Status -->
          <div class="flex items-center justify-between pb-3 border-b border-[#1e293b]">
            <div class="flex items-center gap-2">
              <button
                type="button"
                onclick={() => activeTab = 'visual'}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all {activeTab === 'visual' ? 'bg-[var(--cb-cobalt-500)] text-white font-semibold' : 'text-[#94a3b8] hover:text-white bg-[#0f172a]'}"
              >
                <Network size={13} />
                <span>Flow Diagram</span>
              </button>
              
              <button
                type="button"
                onclick={() => activeTab = 'yaml'}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all {activeTab === 'yaml' ? 'bg-[var(--cb-cobalt-500)] text-white font-semibold' : 'text-[#94a3b8] hover:text-white bg-[#0f172a]'}"
              >
                <Code2 size={13} />
                <span>YAML Schema</span>
              </button>
            </div>

            <span class="badge-sm font-mono uppercase tracking-widest text-[#60a5fa] bg-[rgba(50,135,255,0.12)] px-2.5 py-1 rounded hidden sm:inline-block">
              5 nodes · 4 edges
            </span>
          </div>

          {#if activeTab === 'visual'}
            <!-- Visual Flow Canvas (Formance React Flow Parity) -->
            <div class="relative bg-[#070e22] rounded border border-[#1e293b] p-4 overflow-hidden select-none" style="height: 250px;">
              
              <!-- Subtle dot grid -->
              <svg class="absolute inset-0 w-full h-full opacity-15 pointer-events-none" width="100%" height="100%">
                <defs>
                  <pattern id="schema-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#60a5fa" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#schema-dots)" />
              </svg>

              <!-- SVG Animated Edges -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 1;">
                <!-- Edge 1: world -> marketplace -->
                <path 
                  d="M 116 177 L 180 177" 
                  fill="none" 
                  stroke={selectedNodeId === 'world' || selectedNodeId === 'marketplace' ? '#60a5fa' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />
                
                <!-- Edge 2: buyer -> marketplace -->
                <path 
                  d="M 235 79 L 235 155" 
                  fill="none" 
                  stroke={selectedNodeId === 'buyer' || selectedNodeId === 'marketplace' ? '#60a5fa' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />

                <!-- Edge 3: marketplace -> seller -->
                <path 
                  d="M 276 170 C 330 170, 340 57, 395 57" 
                  fill="none" 
                  stroke={selectedNodeId === 'marketplace' || selectedNodeId === 'seller' ? '#60a5fa' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />

                <!-- Edge 4: marketplace -> fees -->
                <path 
                  d="M 276 177 L 430 177" 
                  fill="none" 
                  stroke={selectedNodeId === 'marketplace' || selectedNodeId === 'fees' ? '#60a5fa' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />
              </svg>

              <!-- Interactive HTML Account Nodes -->
              <div class="relative w-full h-full" style="z-index: 2;">
                {#each nodes as node}
                  <button
                    type="button"
                    onclick={() => selectedNodeId = node.id}
                    class="absolute rounded px-3 py-2 text-xs font-mono text-center transition-all duration-200 cursor-pointer border focus:outline-none {selectedNodeId === node.id ? 'bg-[var(--cb-cobalt-500)] text-white border-[var(--cb-azure-400)] ring-2 ring-[var(--cb-cobalt-500)]/50 shadow-lg scale-105' : 'bg-[#0b1530] text-[#cbd5e1] border-[#1e293b] hover:border-[var(--cb-azure-500)] hover:text-white'}"
                    style="left: {node.x}px; top: {node.y}px; min-width: 96px; height: 44px; display: grid; place-items: center;"
                  >
                    <span class="font-medium truncate max-w-[130px]">@{node.label}</span>
                  </button>
                {/each}
              </div>

            </div>

            <!-- Active Node Inspector Panel -->
            <div class="p-3.5 rounded bg-[#070e22] border border-[#1e293b] text-xs font-mono flex flex-col gap-1.5">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-[#64748b] uppercase">Selected:</span>
                  <span class="text-[#60a5fa] font-bold">@{selectedNode.label}</span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-[#1e293b] text-[#cbd5e1]">
                    {selectedNode.type}
                  </span>
                </div>
                <span class="text-[#60a5fa] text-[11px] font-semibold">Validated</span>
              </div>
              <div class="text-[11px] text-[#94a3b8] font-sans leading-relaxed">
                {selectedNode.description}
              </div>
              <div class="text-[11px] text-[#e2e8f0] font-sans border-t border-[#1e293b] pt-1.5 mt-1">
                <span class="text-[#64748b] font-mono uppercase text-[10px]">Rule: </span>{selectedNode.rule}
              </div>
            </div>

          {:else}
            <!-- YAML Code View -->
            <div class="relative bg-[#070e22] rounded border border-[#1e293b] p-4 font-mono text-xs text-[#cbd5e1] overflow-x-auto" style="height: 330px;">
              <button
                type="button"
                onclick={copyYaml}
                class="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] bg-[#1e293b] hover:bg-[#334155] text-white px-2 py-1 rounded transition-colors cursor-pointer"
              >
                {#if copied}
                  <Check size={12} class="text-[#60a5fa]" />
                  <span class="text-[#60a5fa]">Copied</span>
                {:else}
                  <Copy size={12} />
                  <span>Copy</span>
                {/if}
              </button>
              
              <pre class="leading-relaxed"><code>{yamlSchema}</code></pre>
            </div>
          {/if}

        </div>
      </div>

    </div>
  </div>
</section>
