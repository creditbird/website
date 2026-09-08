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
      label: 'world',
      type: 'ASSET',
      x: 20,
      y: 155,
      description: 'External banking source or fiat settlement rail outside system boundaries.',
      rule: 'Source for incoming customer deposits and external liquidity injection.'
    },
    {
      id: 'buyer',
      label: 'buyer',
      type: 'LIABILITY',
      x: 190,
      y: 35,
      description: 'Individual buyer balance or stored wallet credits.',
      rule: 'Debited when an authorized order transaction is submitted.'
    },
    {
      id: 'marketplace',
      label: 'marketplace',
      type: 'CLEARING',
      x: 180,
      y: 155,
      description: 'Intermediate transit escrow and clearing ledger for order splits.',
      rule: 'Temporarily holds gross order value before instantaneous atomic disbursement.'
    },
    {
      id: 'seller',
      label: 'sellers/$seller_id',
      type: 'LIABILITY',
      x: 395,
      y: 35,
      description: 'Merchant payout liability account indexed by unique seller ID.',
      rule: 'Receives 85% net order value, available for immediate automated payout.'
    },
    {
      id: 'fees',
      label: 'fees',
      type: 'REVENUE',
      x: 430,
      y: 155,
      description: 'Platform gross margin and processing fee collection account.',
      rule: 'Accrues 15% platform take-rate with immediate recognition.'
    }
  ];

  let selectedNodeId = $state<string>('marketplace');
  let activeTab = $state<'visual' | 'yaml'>('visual');
  let copied = $state(false);

  let selectedNode = $derived(nodes.find(n => n.id === selectedNodeId) || nodes[2]);

  const yamlSchema = `chart_of_accounts:
  - name: world
    type: ASSET
    metadata:
      rail: external_fiat
  - name: buyer
    type: LIABILITY
  - name: marketplace
    type: CLEARING
  - name: sellers/$seller_id
    type: LIABILITY
    partition_by: seller_id
  - name: fees
    type: REVENUE

transactions:
  order_checkout:
    description: "Split marketplace order into merchant payout & platform fee"
    postings:
      - source: buyer
        destination: marketplace
        amount: {var: total_amount}
      - source: marketplace
        destination: sellers/$seller_id
        amount: {mul: [{var: total_amount}, 0.85]}
      - source: marketplace
        destination: fees
        amount: {mul: [{var: total_amount}, 0.15]}`;

  function copyYaml() {
    navigator.clipboard?.writeText(yamlSchema);
    copied = true;
    setTimeout(() => { copied = false; }, 2000);
  }
</script>

<section id="schema-builder" class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- Left Column: Copy & Specs (Formance Parity) -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <span class="snap-badge self-start">_SCHEMA BUILDER/</span>
        
        <h2 class="h3 text-[#090e1f]">Author ledger schemas in YAML.</h2>
        
        <p class="subheading-md text-[#090e1f]">
          Your chart of accounts, modeled as code.
        </p>
        
        <p class="p-md text-[#475569] leading-relaxed">
          Write the chart of accounts and named transactions, validate as you type, then export to JSON or copy the API commands to bootstrap your ledger in seconds.
        </p>

        <div class="flex flex-col gap-3 font-mono text-xs text-[#334155] pt-2">
          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Compile-Time Validation:</strong> Catch circular accounts, invalid balance types, and unallocated fee remainder bugs in CI/CD before shipping to production.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Dynamic Path Segments:</strong> Use parameter tokens like <code class="text-[#059669] bg-[#f1f5f9] px-1 py-0.5 rounded font-mono">$seller_id</code> to create multi-tenant account hierarchies on the fly.
            </div>
          </div>

          <div class="flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#059669] mt-1 shrink-0"></span>
            <div>
              <strong class="text-[#090e1f] font-sans">Instant CLI Bootstrap:</strong> Run <code class="text-[#090e1f] bg-[#f1f5f9] px-1.5 py-0.5 rounded font-mono">creditbird schema apply schema.yaml</code> to instantiate your entire accounting graph.
            </div>
          </div>
        </div>

        <div class="pt-4 flex items-center gap-4">
          <a 
            href="https://docs.creditbird.com/schemas" 
            target="_blank"
            rel="noopener noreferrer"
            class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[#059669] hover:underline"
          >
            <span>Read schema documentation</span>
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
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all {activeTab === 'visual' ? 'bg-[#059669] text-white font-semibold' : 'text-[#94a3b8] hover:text-white bg-[#0f172a]'}"
              >
                <Network size={13} />
                <span>Flow Diagram</span>
              </button>
              
              <button
                type="button"
                onclick={() => activeTab = 'yaml'}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all {activeTab === 'yaml' ? 'bg-[#059669] text-white font-semibold' : 'text-[#94a3b8] hover:text-white bg-[#0f172a]'}"
              >
                <Code2 size={13} />
                <span>YAML Schema</span>
              </button>
            </div>

            <span class="badge-sm font-mono uppercase tracking-widest text-[#10b981] bg-[rgba(16,185,129,0.12)] px-2.5 py-1 rounded hidden sm:inline-block">
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
                    <circle cx="2" cy="2" r="1" fill="#38bdf8" />
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
                  stroke={selectedNodeId === 'world' || selectedNodeId === 'marketplace' ? '#10b981' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />
                
                <!-- Edge 2: buyer -> marketplace -->
                <path 
                  d="M 235 79 L 235 155" 
                  fill="none" 
                  stroke={selectedNodeId === 'buyer' || selectedNodeId === 'marketplace' ? '#10b981' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />

                <!-- Edge 3: marketplace -> seller -->
                <path 
                  d="M 276 170 C 330 170, 340 57, 395 57" 
                  fill="none" 
                  stroke={selectedNodeId === 'marketplace' || selectedNodeId === 'seller' ? '#10b981' : '#334155'} 
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                  class="animate-pulse"
                />

                <!-- Edge 4: marketplace -> fees -->
                <path 
                  d="M 276 177 L 430 177" 
                  fill="none" 
                  stroke={selectedNodeId === 'marketplace' || selectedNodeId === 'fees' ? '#10b981' : '#334155'} 
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
                    class="absolute rounded px-3 py-2 text-xs font-mono text-center transition-all duration-200 cursor-pointer border focus:outline-none {selectedNodeId === node.id ? 'bg-[#059669] text-white border-[#34d399] ring-2 ring-[#059669]/50 shadow-lg scale-105' : 'bg-[#0b1530] text-[#cbd5e1] border-[#1e293b] hover:border-[#38bdf8] hover:text-white'}"
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
                  <span class="text-[#38bdf8] font-bold">@{selectedNode.label}</span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-[#1e293b] text-[#cbd5e1]">
                    {selectedNode.type}
                  </span>
                </div>
                <span class="text-[#10b981] text-[11px]">Validated</span>
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
                  <Check size={12} class="text-[#10b981]" />
                  <span class="text-[#10b981]">Copied</span>
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
