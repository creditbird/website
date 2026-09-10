<script lang="ts">
  import { 
    FlaskConical, 
    Droplets, 
    Activity, 
    Wind, 
    CheckCircle2, 
    FileText
  } from 'lucide-svelte';
  import { getLocale } from '$lib/paraglide/runtime';
  import type { SupportedLocale } from '$lib/data/legal/types';
  import { labExtractionData } from '$lib/data/labExtraction';

  let activeTab = $state<'distillation' | 'separation' | 'gcms' | 'blending'>('distillation');

  const currentLocale = $derived(getLocale());
  const data = $derived(labExtractionData[currentLocale as SupportedLocale] ?? labExtractionData.en);

  const tabIcons = {
    distillation: FlaskConical,
    separation: Droplets,
    gcms: Activity,
    blending: Wind
  };
</script>

<section 
  id="lab-extraction"
  class="relative theme-cobalt-primary dark bg-background text-foreground"
  style="--section-accent:var(--cobalt-accent, #60a5fa)"
>
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">

      <!-- 1. Header Card (Snap-card with hairline grid-ring) -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-fit px-3 text-eyebrow-foreground bg-eyebrow-background gap-1.5 self-start">
              <FlaskConical size={13} class="text-[#60a5fa] shrink-0" />
              {data.header.eyebrow}
            </span>
            <span class="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-none flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ISO 9235:2021 COMPLIANT
            </span>
          </div>

          <h2 class="h3 font-bold tracking-tight text-foreground">
            {data.header.title}
          </h2>
          <p class="subheading-md text-[#94a3b8]">
            {data.header.desc}
          </p>
        </div>
      </div>

      <!-- 2. Interactive Navigation Tabs (4 Process Stages) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {#each data.tabs as tab (tab.id)}
          {@const Icon = tabIcons[tab.id]}
          <button
            type="button"
            onclick={() => activeTab = tab.id}
            class="snap-group-item text-left p-1gu flex flex-col justify-between grid-ring transition-all cursor-pointer select-none {activeTab === tab.id ? 'bg-[#1e3a8a] text-white ring-2 ring-[#60a5fa] z-10' : 'bg-[#0f1d40] text-[#cbd5e1] hover:bg-[#162b5d]'}"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-xs text-[#60a5fa] font-bold tracking-wider">{tab.num}</span>
              <Icon size={16} class="shrink-0 {activeTab === tab.id ? 'text-emerald-400' : 'text-[#64748b]'}" />
            </div>
            <div>
              <div class="font-mono text-[10px] text-[#93c5fd] mb-0.5 tracking-tight">{tab.code}</div>
              <div class="font-semibold text-sm leading-snug">{tab.title}</div>
              <div class="text-[11px] text-[#94a3b8] mt-1 line-clamp-1">{tab.sub}</div>
            </div>
          </button>
        {/each}
      </div>

      <!-- 3. Main CAD Blueprint Display Frame -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-[#0a1329] border border-[rgba(74,144,226,0.3)] overflow-hidden">
        
        <!-- Blueprint Top Technical Ribbon -->
        <div class="flex items-center justify-between px-4 py-2 border-b border-[rgba(74,144,226,0.25)] bg-[#070e22] text-xs font-mono">
          <div class="flex items-center gap-3">
            <span class="text-[#60a5fa] font-bold">SCHEMATIC_VIEWPORT // </span>
            <span class="text-white uppercase tracking-wider font-semibold">
              {#if activeTab === 'distillation'}FIG. 01: STEAM DISTILLATION STILL &amp; CLEVENGER CONDENSER
              {:else if activeTab === 'separation'}FIG. 02: HIGH-BOROSILICATE SEPARATORY FUNNEL &amp; MEMBRANE FILTER
              {:else if activeTab === 'gcms'}FIG. 03: AGILENT GC-MS CHROMATOGRAM &amp; MONOTERPENE FINGERPRINT
              {:else}FIG. 04: BESPOKE FORMULATION &amp; VENTURI COLD-AIR DIFFUSER
              {/if}
            </span>
          </div>
          <div class="hidden sm:flex items-center gap-4 text-[#64748b] text-[11px]">
            <span>GRID: 32px EXACT</span>
            <span>PROJECTION: ORTHOGRAPHIC 1:1</span>
            <span class="text-emerald-400 font-bold">STATUS: VERIFIED</span>
          </div>
        </div>

        <!-- Blueprint CAD Canvas Area -->
        <div class="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-center">
          
          <!-- Vector Blueprint CAD Diagram (Left / Main) -->
          <div 
            class="flex-1 w-full bg-[#081026] grid-ring p-3 sm:p-4 relative overflow-hidden rounded-none border border-[rgba(59,130,246,0.3)] flex items-center justify-center min-h-[320px] sm:min-h-[400px]"
            style="background-image: linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px); background-size: 32px 32px;"
          >
            
            <!-- VIEW 1: STEAM DISTILLATION STILL & CLEVENGER -->
            {#if activeTab === 'distillation'}
              <svg viewBox="0 0 600 360" class="w-full h-full max-h-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
                <!-- Centerline & Ticks -->
                <line x1="140" y1="20" x2="140" y2="340" stroke="rgba(96,165,250,0.25)" stroke-dasharray="4 4" stroke-width="0.8" />
                <line x1="420" y1="20" x2="420" y2="340" stroke="rgba(96,165,250,0.25)" stroke-dasharray="4 4" stroke-width="0.8" />

                <!-- 1. STEAM STILL VESSEL (Nồi cất hơi nước Inox 316) -->
                <!-- Boiler Tank Body -->
                <rect x="70" y="140" width="140" height="150" rx="8" fill="rgba(15,23,42,0.6)" stroke="#60a5fa" stroke-width="1.8" />
                <line x1="70" y1="210" x2="210" y2="210" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3 3" />
                
                <!-- Perforated Grid Plate (Vỉ ngăn nguyên liệu thảo mộc) -->
                <line x1="74" y1="200" x2="206" y2="200" stroke="#93c5fd" stroke-width="2" stroke-dasharray="4 2" />
                <text x="140" y="180" font-family="monospace" font-size="9" fill="#93c5fd" text-anchor="middle" font-weight="bold">{data.svgLabels.plantChamber}</text>
                <text x="140" y="192" font-family="monospace" font-size="7.5" fill="#64748b" text-anchor="middle">{data.svgLabels.plantChamberSub}</text>

                <!-- Water boiling chamber below -->
                <rect x="72" y="212" width="136" height="74" fill="rgba(56,189,248,0.15)" />
                <text x="140" y="250" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle" font-weight="bold">{data.svgLabels.heatingWater}</text>
                
                <!-- Heating coils below -->
                <path d="M 85 305 Q 95 295 105 305 Q 115 315 125 305 Q 135 295 145 305 Q 155 315 165 305 Q 175 295 185 305 Q 195 315 205 305" fill="none" stroke="#f43f5e" stroke-width="2" />
                <text x="140" y="325" font-family="monospace" font-size="7.5" fill="#f43f5e" text-anchor="middle">HEATING COIL // P: 1.05 BAR</text>

                <!-- Steam rising arrows -->
                <path d="M 110 130 L 110 110" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 2" />
                <path d="M 140 125 L 140 100" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 2" />
                <path d="M 170 130 L 170 110" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 2" />

                <!-- Gooseneck Vapor Tube (Cổ thiên nga dẫn hơi) -->
                <path d="M 140 140 L 140 70 Q 140 50 165 50 L 320 50 Q 345 50 355 70 L 380 110" fill="none" stroke="#60a5fa" stroke-width="3" />
                <text x="250" y="42" font-family="monospace" font-size="8.5" fill="#60a5fa" text-anchor="middle" font-weight="bold">{data.svgLabels.vaporDuct}</text>

                <!-- Pressure gauge -->
                <circle cx="210" cy="80" r="14" fill="#0f172a" stroke="#60a5fa" stroke-width="1.4" />
                <line x1="210" y1="80" x2="218" y2="74" stroke="#f43f5e" stroke-width="1.5" />
                <text x="210" y="83" font-family="monospace" font-size="6" fill="#93c5fd" text-anchor="middle">1.05 BAR</text>

                <!-- 2. LIEBIG / GRAHAM CONDENSER (Ống sinh hàn ngưng tụ) -->
                <!-- Slanted from (370, 95) to (440, 205) -->
                <g transform="translate(350, 75) rotate(42)">
                  <!-- Outer Water Jacket -->
                  <rect x="0" y="-18" width="140" height="36" rx="4" fill="rgba(30,58,138,0.4)" stroke="#60a5fa" stroke-width="1.8" />
                  
                  <!-- Spiral Cooling Coil Inside -->
                  <path d="M 10 0 Q 20 -10 30 0 Q 40 10 50 0 Q 60 -10 70 0 Q 80 10 90 0 Q 100 -10 110 0 Q 120 10 130 0" fill="none" stroke="#38bdf8" stroke-width="2.4" />
                  
                  <!-- Water inlet nozzle -->
                  <line x1="120" y1="18" x2="120" y2="30" stroke="#38bdf8" stroke-width="2" />
                  <!-- Water outlet nozzle -->
                  <line x1="20" y1="-18" x2="20" y2="-30" stroke="#38bdf8" stroke-width="2" />
                </g>
                <text x="505" y="165" font-family="monospace" font-size="8" fill="#38bdf8" font-weight="bold">CW IN [18°C] ➔</text>
                <text x="310" y="105" font-family="monospace" font-size="8" fill="#38bdf8" font-weight="bold">CW OUT [26°C] ➔</text>

                <!-- 3. CLEVENGER ESSENTIAL OIL SEPARATOR TUBE -->
                <path d="M 445 195 L 445 285 Q 445 295 435 295 L 395 295 L 395 230 Q 395 220 380 220 L 330 220" fill="none" stroke="#60a5fa" stroke-width="2" />
                <rect x="435" y="210" width="20" height="75" fill="rgba(15,23,42,0.8)" stroke="#60a5fa" stroke-width="1.5" />
                
                <!-- Separated Oil Layer (Top) -->
                <rect x="436" y="212" width="18" height="24" fill="rgba(245,158,11,0.85)" stroke="#f59e0b" stroke-width="1" />
                <text x="475" y="222" font-family="monospace" font-size="8" fill="#f59e0b" font-weight="bold">{data.svgLabels.oilLayer}</text>
                <text x="475" y="232" font-family="monospace" font-size="7" fill="#cbd5e1">{data.svgLabels.pureOilSub}</text>

                <!-- Hydrosol Water Layer (Bottom) -->
                <rect x="436" y="236" width="18" height="49" fill="rgba(56,189,248,0.3)" />
                <text x="475" y="260" font-family="monospace" font-size="8" fill="#38bdf8" font-weight="bold">{data.svgLabels.hydrosolLayer}</text>
                <text x="475" y="270" font-family="monospace" font-size="7" fill="#64748b">{data.svgLabels.hydrosolSub}</text>

                <!-- Return Water Line to Boiler -->
                <path d="M 330 220 L 210 220" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3" />
                <text x="270" y="214" font-family="monospace" font-size="7" fill="#38bdf8" text-anchor="middle">{data.svgLabels.refluxWater}</text>

                <!-- Pure Oil Stopcock Drainage -->
                <line x1="445" y1="285" x2="445" y2="320" stroke="#60a5fa" stroke-width="2" />
                <rect x="440" y="295" width="10" height="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1" />
                <!-- Detaching Drop -->
                <circle cx="445" cy="330" r="3.5" fill="#10b981" />
                <text x="445" y="345" font-family="monospace" font-size="7.5" fill="#10b981" font-weight="bold" text-anchor="middle">{data.svgLabels.pureDrop}</text>
              </svg>

            <!-- VIEW 2: HIGH-BOROSILICATE SEPARATORY FUNNEL -->
            {:else if activeTab === 'separation'}
              <svg viewBox="0 0 600 360" class="w-full h-full max-h-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
                <!-- Center Axis -->
                <line x1="300" y1="20" x2="300" y2="340" stroke="rgba(96,165,250,0.25)" stroke-dasharray="4 4" stroke-width="0.8" />

                <!-- Separatory Funnel Pear Shape (Phễu chiết quả lê thủy tinh Borosilicate 3.3) -->
                <!-- Top Stopper Neck -->
                <rect x="282" y="30" width="36" height="25" fill="#0f172a" stroke="#60a5fa" stroke-width="1.8" />
                <ellipse cx="300" cy="30" rx="18" ry="5" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5" />
                <text x="300" y="22" font-family="monospace" font-size="8" fill="#93c5fd" text-anchor="middle">{data.svgLabels.glassStopper}</text>

                <!-- Pear Body Silhouette -->
                <path 
                  d="M 282 55 C 240 70 210 120 210 170 C 210 220 270 250 290 270 L 290 295 L 310 295 L 310 270 C 330 250 390 220 390 170 C 390 120 360 70 318 55 Z" 
                  fill="#081026" 
                  stroke="#60a5fa" 
                  stroke-width="2.2" 
                />

                <!-- Layer 1: Essential Oil Phase (Tầng trên: Tinh dầu màu vàng hổ phách) -->
                <path 
                  d="M 218 140 C 235 90 365 90 382 140 Q 300 148 218 140 Z" 
                  fill="rgba(245,158,11,0.8)" 
                  stroke="#f59e0b" 
                  stroke-width="1" 
                />
                <text x="300" y="122" font-family="monospace" font-size="9" fill="#fef3c7" text-anchor="middle" font-weight="bold">{data.svgLabels.oilPhase}</text>
                <text x="300" y="133" font-family="monospace" font-size="7.5" fill="#fef3c7" text-anchor="middle">{data.svgLabels.oilPhaseSub}</text>

                <!-- Layer 2: Hydrosol Water Phase (Tầng dưới: Nước thơm) -->
                <path 
                  d="M 218 140 Q 300 148 382 140 C 385 180 340 230 305 260 L 295 260 C 260 230 215 180 218 140 Z" 
                  fill="rgba(56,189,248,0.25)" 
                />
                <text x="300" y="195" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle" font-weight="bold">{data.svgLabels.hydrosolPhase}</text>
                <text x="300" y="206" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="middle">{data.svgLabels.hydrosolPhaseSub}</text>

                <!-- Meniscus Separation Boundary (Mặt phân cách hai pha) -->
                <path d="M 218 140 Q 300 148 382 140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" fill="none" />
                
                <!-- Callout Line to Meniscus -->
                <line x1="382" y1="140" x2="435" y2="140" stroke="#f59e0b" stroke-width="1" />
                <text x="445" y="138" font-family="monospace" font-size="8.5" fill="#f59e0b" font-weight="bold">{data.svgLabels.meniscus}</text>
                <text x="445" y="148" font-family="monospace" font-size="7.5" fill="#cbd5e1">{data.svgLabels.meniscusSub}</text>

                <!-- PTFE Stopcock Valve (Van khóa xoay Teflon) -->
                <rect x="280" y="280" width="40" height="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5" />
                <line x1="300" y1="272" x2="300" y2="300" stroke="#f43f5e" stroke-width="3" />
                <text x="210" y="288" font-family="monospace" font-size="8" fill="#93c5fd" font-weight="bold">{data.svgLabels.ptfeValve}</text>

                <!-- Micro-membrane Filter Capsule at bottom -->
                <rect x="286" y="304" width="28" height="14" rx="2" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
                <line x1="288" y1="311" x2="312" y2="311" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2" />
                <text x="330" y="314" font-family="monospace" font-size="8" fill="#10b981" font-weight="bold">{data.svgLabels.membraneFilter}</text>

                <!-- Pure Golden Drop Dripping -->
                <circle cx="300" cy="336" r="4.5" fill="#10b981" stroke="#34d399" stroke-width="1" />
                <text x="300" y="354" font-family="monospace" font-size="8" fill="#10b981" font-weight="bold" text-anchor="middle">{data.svgLabels.pureDrop}</text>

                <!-- Glass Technical Specs in corner -->
                <g font-family="monospace" font-size="7.5" fill="#64748b">
                  <text x="50" y="160">MATERIAL: BOROSILICATE GLASS 3.3</text>
                  <text x="50" y="172">THERMAL EXPANSION: 3.3 × 10⁻⁶ K⁻¹</text>
                  <text x="50" y="184">CAPACITY: 1,000 mL // ISO 4800</text>
                  <text x="50" y="196">SOLVENT-FREE PROTOCOL: STRICT</text>
                </g>
              </svg>

            <!-- VIEW 3: AGILENT GC-MS CHROMATOGRAM & MONOTERPENE FINGERPRINT -->
            {:else if activeTab === 'gcms'}
              <svg viewBox="0 0 600 360" class="w-full h-full max-h-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
                <!-- GC-MS Header & Specs -->
                <rect x="40" y="25" width="520" height="28" fill="rgba(15,23,42,0.8)" stroke="#3b82f6" stroke-width="1" />
                <text x="52" y="42" font-family="monospace" font-size="7.5" fill="#60a5fa" font-weight="bold">{data.svgLabels.gcmsTitle}</text>
                <text x="548" y="42" font-family="monospace" font-size="7.5" fill="#10b981" font-weight="bold" text-anchor="end">{data.svgLabels.coaResult}</text>

                <!-- Axes: Y = Relative Abundance (%), X = Retention Time (min) -->
                <line x1="70" y1="70" x2="70" y2="280" stroke="#60a5fa" stroke-width="1.5" />
                <line x1="70" y1="280" x2="550" y2="280" stroke="#60a5fa" stroke-width="1.5" />

                <!-- Y Axis Labels -->
                <text x="60" y="80" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="end">100%</text>
                <text x="60" y="130" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="end">75%</text>
                <text x="60" y="180" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="end">50%</text>
                <text x="60" y="230" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="end">25%</text>
                <text x="60" y="280" font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="end">0%</text>

                <!-- Grid Ticks X -->
                <g font-family="monospace" font-size="7.5" fill="#94a3b8" text-anchor="middle">
                  <line x1="120" y1="280" x2="120" y2="285" stroke="#60a5fa" />
                  <text x="120" y="295">5.0m</text>

                  <line x1="200" y1="280" x2="200" y2="285" stroke="#60a5fa" />
                  <text x="200" y="295">10.0m</text>

                  <line x1="280" y1="280" x2="280" y2="285" stroke="#60a5fa" />
                  <text x="280" y="295">15.0m</text>

                  <line x1="360" y1="280" x2="360" y2="285" stroke="#60a5fa" />
                  <text x="360" y="295">20.0m</text>

                  <line x1="440" y1="280" x2="440" y2="285" stroke="#60a5fa" />
                  <text x="440" y="295">25.0m</text>

                  <line x1="520" y1="280" x2="520" y2="285" stroke="#60a5fa" />
                  <text x="520" y="295">30.0m</text>
                </g>
                <text x="310" y="315" font-family="monospace" font-size="8.5" fill="#60a5fa" text-anchor="middle">{data.svgLabels.retentionTimeAxis}</text>

                <!-- Chromatogram Baseline & Peaks Trace -->
                <path 
                  d="M 70 280 
                     L 115 280 
                     Q 120 279 122 250 Q 124 279 128 280 
                     L 155 280 
                     Q 160 279 162 235 Q 164 279 168 280 
                     L 205 280 
                     Q 212 279 215 180 Q 218 279 224 280 
                     L 255 280 
                     Q 262 279 265 75 Q 268 279 275 280 
                     L 320 280 
                     Q 326 279 328 210 Q 330 279 335 280 
                     L 540 280" 
                  fill="none" 
                  stroke="#38bdf8" 
                  stroke-width="1.8" 
                />

                <!-- Shaded Integration Area for Key Pure Peak (Linalool 99.8%) -->
                <path 
                  d="M 255 280 Q 262 279 265 75 Q 268 279 275 280 Z" 
                  fill="rgba(16,185,129,0.3)" 
                  stroke="#10b981" 
                  stroke-width="2" 
                />

                <!-- Callout Peak 1: alpha-Pinene -->
                <text x="122" y="242" font-family="monospace" font-size="7" fill="#93c5fd" text-anchor="middle">α-Pinene [3.2%]</text>

                <!-- Callout Peak 2: Myrcene -->
                <text x="162" y="226" font-family="monospace" font-size="7" fill="#93c5fd" text-anchor="middle">Myrcene [1.8%]</text>

                <!-- Callout Peak 3: D-Limonene -->
                <text x="215" y="170" font-family="monospace" font-size="7.5" fill="#93c5fd" text-anchor="middle">D-Limonene [8.5%]</text>

                <!-- Callout Peak 4 (Dominant): LINALOOL 99.8% PURITY -->
                <line x1="265" y1="75" x2="295" y2="65" stroke="#10b981" stroke-width="1.2" />
                <rect x="295" y="52" width="180" height="42" rx="2" fill="rgba(6,78,59,0.85)" stroke="#10b981" stroke-width="1.2" />
                <text x="305" y="66" font-family="monospace" font-size="8.5" fill="#34d399" font-weight="bold">{data.svgLabels.dominantPeak}</text>
                <text x="305" y="77" font-family="monospace" font-size="7.5" fill="#e2e8f0">RT: 14.28m // CAS: 78-70-6</text>
                <text x="305" y="87" font-family="monospace" font-size="7" fill="#a7f3d0">{data.svgLabels.nistMatch}</text>

                <!-- Terpene Molecular Skeletal Structure Box -->
                <g transform="translate(420, 120)">
                  <rect x="0" y="0" width="125" height="135" fill="rgba(15,23,42,0.9)" stroke="#3b82f6" stroke-width="1" />
                  <text x="62" y="18" font-family="monospace" font-size="8" fill="#60a5fa" text-anchor="middle" font-weight="bold">{data.svgLabels.molStructure}</text>
                  <text x="62" y="28" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">C₁₀H₁₈O (Monoterpene)</text>

                  <!-- Chemical bond lines -->
                  <g stroke="#38bdf8" stroke-width="1.6" fill="none">
                    <line x1="25" y1="70" x2="45" y2="55" />
                    <line x1="45" y1="55" x2="65" y2="70" />
                    <line x1="65" y1="70" x2="85" y2="55" />
                    <line x1="85" y1="55" x2="105" y2="70" />
                    <line x1="85" y1="55" x2="85" y2="38" />
                    <line x1="65" y1="70" x2="65" y2="92" stroke="#10b981" />
                    <!-- Double bonds -->
                    <line x1="23" y1="68" x2="43" y2="53" stroke-width="0.9" />
                  </g>
                  <text x="65" y="104" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle" font-weight="bold">-OH</text>
                  <text x="62" y="124" font-family="monospace" font-size="7" fill="#34d399" text-anchor="middle">{data.svgLabels.terpeneBenefits}</text>
                </g>
              </svg>

            <!-- VIEW 4: BESPOKE BLENDING & VENTURI COLD-AIR DIFFUSER -->
            {:else}
              <svg viewBox="0 0 600 360" class="w-full h-full max-h-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
                <!-- 1. OLFACTORY PYRAMID (Tháp nốt hương điều chế độc quyền) -->
                <g transform="translate(60, 40)">
                  <text x="90" y="0" font-family="monospace" font-size="8.5" fill="#60a5fa" text-anchor="middle" font-weight="bold">{data.svgLabels.scentPyramid}</text>
                  
                  <!-- Top Note Pyramid Peak -->
                  <polygon points="90,15 130,55 50,55" fill="rgba(250,204,21,0.25)" stroke="#facc15" stroke-width="1.4" />
                  <text x="90" y="42" font-family="monospace" font-size="7.5" fill="#fef08a" text-anchor="middle" font-weight="bold">{data.svgLabels.topNotes}</text>
                  <text x="90" y="51" font-family="monospace" font-size="6.5" fill="#cbd5e1" text-anchor="middle">{data.svgLabels.topNotesList}</text>

                  <!-- Middle / Heart Notes -->
                  <polygon points="50,58 130,58 155,108 25,108" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="1.4" />
                  <text x="90" y="82" font-family="monospace" font-size="7.5" fill="#fecdd3" text-anchor="middle" font-weight="bold">{data.svgLabels.heartNotes}</text>
                  <text x="90" y="93" font-family="monospace" font-size="6.5" fill="#cbd5e1" text-anchor="middle">{data.svgLabels.heartNotesList}</text>

                  <!-- Base Notes Foundation -->
                  <polygon points="25,111 155,111 185,175 -5,175" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.4" />
                  <text x="90" y="138" font-family="monospace" font-size="7.5" fill="#bfdbfe" text-anchor="middle" font-weight="bold">{data.svgLabels.baseNotes}</text>
                  <text x="90" y="149" font-family="monospace" font-size="6.5" fill="#cbd5e1" text-anchor="middle">{data.svgLabels.baseNotesList}</text>
                  <text x="90" y="162" font-family="monospace" font-size="6" fill="#64748b" text-anchor="middle">{data.svgLabels.longevityNote}</text>
                </g>

                <!-- 2. VENTURI TWO-FLUID COLD ATOMIZATION NOZZLE (Mặt cắt béc phun sóng lạnh) -->
                <g transform="translate(270, 70)">
                  <text x="150" y="-15" font-family="monospace" font-size="8.5" fill="#60a5fa" text-anchor="middle" font-weight="bold">{data.svgLabels.venturiTitle}</text>
                  
                  <!-- Nozzle Outer Stainless Steel Body -->
                  <path d="M 40 40 L 120 40 L 160 70 L 160 90 L 120 120 L 40 120 Z" fill="rgba(15,23,42,0.8)" stroke="#60a5fa" stroke-width="2" />
                  
                  <!-- Venturi Chamber Constriction -->
                  <path d="M 40 65 L 105 65 L 135 77 L 135 83 L 105 95 L 40 95 Z" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.2" />

                  <!-- High Velocity Air Flow Line -->
                  <line x1="0" y1="80" x2="135" y2="80" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2" />
                  <text x="10" y="60" font-family="monospace" font-size="7.5" fill="#38bdf8" font-weight="bold">{data.svgLabels.compressedAir}</text>

                  <!-- Oil Capillary Feed Tube (Hút dầu bằng áp suất âm Venturi) -->
                  <line x1="125" y1="120" x2="125" y2="190" stroke="#60a5fa" stroke-width="2.5" />
                  <line x1="125" y1="120" x2="125" y2="190" stroke="#10b981" stroke-width="1.5" />
                  <text x="125" y="205" font-family="monospace" font-size="7.5" fill="#10b981" text-anchor="middle" font-weight="bold">{data.svgLabels.oilSuction}</text>
                  <text x="125" y="215" font-family="monospace" font-size="6.5" fill="#64748b" text-anchor="middle">{data.svgLabels.bernoulliSub}</text>

                  <!-- Micro Orifice Nozzle Tip (Lỗ phun siêu vi Ø0.12mm) -->
                  <rect x="160" y="76" width="6" height="8" fill="#f43f5e" />
                  <text x="163" y="68" font-family="monospace" font-size="7" fill="#f43f5e" text-anchor="middle">Ø 0.12mm</text>

                  <!-- Expanding Nano Mist Cone -->
                  <path d="M 166 78 L 290 30 M 166 82 L 290 130" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3" />
                  
                  <!-- Plume of Nano Aerosol Droplets (<0.1 um) -->
                  <g fill="#38bdf8" opacity="0.85">
                    <circle cx="180" cy="80" r="1.5" />
                    <circle cx="195" cy="74" r="1.2" />
                    <circle cx="200" cy="86" r="1.4" />
                    <circle cx="215" cy="68" r="1.1" />
                    <circle cx="220" cy="80" r="1.3" />
                    <circle cx="225" cy="92" r="1.1" />
                    <circle cx="240" cy="60" r="1.0" />
                    <circle cx="245" cy="75" r="1.2" />
                    <circle cx="250" cy="90" r="1.0" />
                    <circle cx="255" cy="105" r="1.0" />
                    <circle cx="270" cy="50" r="0.8" />
                    <circle cx="275" cy="70" r="0.9" />
                    <circle cx="280" cy="85" r="0.9" />
                    <circle cx="285" cy="100" r="0.8" />
                    <circle cx="290" cy="115" r="0.8" />
                  </g>

                  <text x="250" y="40" font-family="monospace" font-size="8" fill="#38bdf8" font-weight="bold">{data.svgLabels.nanoMist}</text>
                  <text x="250" y="145" font-family="monospace" font-size="7" fill="#94a3b8">{data.svgLabels.hvacNote}</text>
                </g>
              </svg>
            {/if}

          </div>

          <!-- Technical Callout Cards on Right Column -->
          <div class="w-full lg:w-[calc(var(--grid-unit)*12)] flex flex-col gap-3 font-mono text-xs">
            
            <div class="p-3 bg-[#070e22] grid-ring border border-[rgba(74,144,226,0.3)] flex flex-col gap-1.5">
              <span class="text-[#60a5fa] font-bold text-[11px] flex items-center gap-1.5">
                <CheckCircle2 size={13} class="text-emerald-400 shrink-0" />
                {data.techLabels.specsHeader}
              </span>
              <span class="text-white text-xs font-semibold">
                {data.techSpecs[activeTab].title}
              </span>
              <p class="text-[11px] text-[#94a3b8] font-sans leading-relaxed">
                {data.techSpecs[activeTab].desc}
              </p>
            </div>

            <div class="p-3 bg-[#070e22] grid-ring border border-[rgba(74,144,226,0.3)] flex flex-col gap-1.5">
              <span class="text-emerald-400 font-bold text-[11px] flex items-center gap-1.5">
                <FileText size={13} class="text-emerald-400 shrink-0" />
                {data.techLabels.certHeader}
              </span>
              <div class="space-y-1 text-[11px] text-[#cbd5e1]">
                <div class="flex justify-between">
                  <span class="text-[#64748b]">{data.techLabels.certStandard}:</span>
                  <span class="text-white font-semibold">ISO 9235 / IFRA</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#64748b]">{data.techLabels.certPurity}:</span>
                  <span class="text-emerald-400 font-semibold">{data.techLabels.certPurityVal}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#64748b]">{data.techLabels.certAlcohol}:</span>
                  <span class="text-white font-semibold">0.00% (Non-Alcohol)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#64748b]">{data.techLabels.certCoa}:</span>
                  <span class="text-[#60a5fa] font-semibold">{data.techLabels.certCoaVal}</span>
                </div>
              </div>
            </div>

            <div class="p-2.5 bg-[#0e1d44] grid-ring border border-[rgba(96,165,250,0.3)] text-[11px] text-[#93c5fd] font-sans flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping"></span>
              <span>{data.techLabels.guaranteeNote}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>
