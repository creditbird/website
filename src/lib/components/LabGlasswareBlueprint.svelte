<script lang="ts">
  import { FlaskConical, Sparkles, Activity, FileCheck } from 'lucide-svelte';

  let activeItem = $state<string | null>(null);

  const items = [
    { id: 'flask', name: 'Bình tam giác Erlenmeyer (250mL)', code: 'BOROSILICATE 3.3 // ISO 4797', desc: 'Bình chứa dung dịch nguyên liệu thực vật gia nhiệt, chịu nhiệt sốc 150°C' },
    { id: 'condenser', name: 'Ống sinh hàn Liebig làm lạnh', code: 'CW IN 18°C // CW OUT 24°C', desc: 'Hệ thống ngưng tụ hơi tinh dầu hai lớp nước tuần hoàn đối lưu khép kín' },
    { id: 'separator', name: 'Bộ tách pha Clevenger & Van PTFE', code: 'PHASE: OIL (ρ<1.0) / HYDROSOL', desc: 'Phân tách lớp tinh dầu nhẹ nổi lên trên và nước cất hồi lưu về nồi cất' },
    { id: 'gcms', name: 'Phổ sắc ký khí GC-MS & Phân tử Terpene', code: 'RT 14.28m // LINALOOL 99.8%', desc: 'Định danh định lượng từng pic hợp chất thơm, kiểm định chuẩn COA quốc tế' },
    { id: 'nano', name: 'Béc phun sương Nano lạnh', code: 'DROPLET < 0.1 µm // HVAC READY', desc: 'Khuếch tán hạt sương nano siêu mịn lơ lửng, không ngưng tụ bề mặt' }
  ];
</script>

<div class="flex flex-col w-full h-full select-none">
  <!-- Top Technical Header Badge / Coordinate Specs (Snapped 1gu = 32px) -->
  <div class="flex items-center justify-between h-1gu px-3 font-mono text-[11px] grid-ring bg-[#edf2ff] text-[var(--cb-cobalt-700)] border border-[#c2d2fc]">
    <div class="flex items-center gap-1.5 font-bold tracking-wider">
      <FlaskConical size={13} class="text-[#2563eb] shrink-0" />
      <span>_LAB_SCHEMATIC: EXTRACTION & DISTILLATION</span>
    </div>
    <div class="flex items-center gap-2.5 text-[10px] text-[#64748b]">
      <span class="inline-flex items-center gap-1 font-mono text-[#059669] font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        COA 100% PURE
      </span>
      <span class="hidden xl:inline border-l border-[#cbd5e1] pl-2 text-[#475569]">
        DWG: CB-SL-042 // REV 2.4
      </span>
    </div>
  </div>

  <!-- Bottom Blueprint Vector Canvas (Snapped 3gu = 96px) -->
  <div 
    class="h-[calc(var(--grid-unit)*3)] grid-ring bg-white relative overflow-hidden flex items-center justify-center group"
    style="background-image: radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0); background-size: 16px 16px;"
  >
    <svg 
      viewBox="0 0 720 96" 
      class="w-full h-full text-[#1e40af] overflow-visible"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Blueprint Grid Pattern -->
        <pattern id="millimeter-grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(37,99,235,0.06)" stroke-width="0.5" />
        </pattern>

        <!-- Liquid Gradient for Flask -->
        <linearGradient id="flask-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.45" />
        </linearGradient>

        <!-- Essential Oil Gradient -->
        <linearGradient id="oil-layer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.85" />
        </linearGradient>

        <!-- Marker arrows -->
        <marker id="arrow-blue" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#2563eb" />
        </marker>
        <marker id="arrow-cyan" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#0284c7" />
        </marker>
      </defs>

      <!-- Fill background with subtle blueprint grid -->
      <rect width="720" height="96" fill="url(#millimeter-grid)" />

      <!-- Coordinate Ticks & Crosshairs -->
      <g stroke="rgba(37,99,235,0.3)" stroke-width="0.8" fill="none">
        <!-- Crosshairs -->
        <path d="M 12 16 L 24 16 M 18 10 L 18 22" />
        <path d="M 354 16 L 366 16 M 360 10 L 360 22" />
        <path d="M 700 16 L 712 16 M 706 10 L 706 22" />
        <path d="M 12 84 L 24 84 M 18 78 L 18 90" />
        <path d="M 700 84 L 712 84 M 706 78 L 706 90" />
      </g>

      <!-- Dimension Baseline Guideline -->
      <line x1="20" y1="88" x2="700" y2="88" stroke="rgba(37,99,235,0.15)" stroke-dasharray="2 4" stroke-width="0.7" />

      <!-- ========================================================================= -->
      <!-- MODULE 1: ERLENMEYER FLASK 250mL (BÌNH TAM GIÁC CHƯNG CẤT) (X: 35 -> 135) -->
      <!-- ========================================================================= -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <g 
        class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        onmouseenter={() => activeItem = 'flask'}
        onmouseleave={() => activeItem = null}
      >
        <!-- Center reference line -->
        <line x1="85" y1="6" x2="85" y2="86" stroke="#93c5fd" stroke-dasharray="3 3" stroke-width="0.6" />

        <!-- Liquid fill inside conical flask -->
        <path 
          d="M 67 56 L 50 82 Q 50 85 54 85 L 116 85 Q 120 85 120 82 L 103 56 Q 85 54 67 56 Z" 
          fill="url(#flask-liquid)" 
        />
        <!-- Meniscus curved top -->
        <path d="M 67 56 Q 85 58 103 56" fill="none" stroke="#38bdf8" stroke-width="1.2" />

        <!-- Liquid bubbles -->
        <circle cx="75" cy="74" r="1.5" fill="#38bdf8" opacity="0.8" />
        <circle cx="92" cy="78" r="1.2" fill="#38bdf8" opacity="0.7" />
        <circle cx="82" cy="66" r="1.8" fill="#38bdf8" opacity="0.9" />
        <circle cx="98" cy="68" r="1" fill="#38bdf8" opacity="0.6" />

        <!-- Flask Outer Wall (Glass Hairline) -->
        <path 
          d="M 76 14 L 76 34 L 48 81 Q 46 86 52 86 L 118 86 Q 124 86 122 81 L 94 34 L 94 14 Z" 
          fill="none" 
          stroke="#1e40af" 
          stroke-width="1.6" 
          stroke-linejoin="round"
        />

        <!-- Top Rim Lip -->
        <ellipse cx="85" cy="14" rx="10" ry="2.2" fill="none" stroke="#1e40af" stroke-width="1.4" />
        <ellipse cx="85" cy="14" rx="7.5" ry="1.6" fill="none" stroke="#3b82f6" stroke-width="0.8" />

        <!-- Ground Joint Ring (24/40 taper) -->
        <line x1="76" y1="24" x2="94" y2="24" stroke="#60a5fa" stroke-width="1" stroke-dasharray="2 1" />

        <!-- Graduation Marks (50, 100, 150, 200 mL) -->
        <g stroke="#1d4ed8" stroke-width="0.9">
          <line x1="71" y1="46" x2="79" y2="46" />
          <line x1="68" y1="54" x2="78" y2="54" />
          <line x1="63" y1="62" x2="76" y2="62" />
          <line x1="58" y1="70" x2="73" y2="70" />
          <line x1="53" y1="78" x2="70" y2="78" />
        </g>
        <!-- Grad numbers -->
        <text x="80" y="47.5" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">200</text>
        <text x="79" y="55.5" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">150</text>
        <text x="77" y="63.5" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">100</text>
        <text x="74" y="71.5" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">50</text>

        <!-- Technical Annotation Callout -->
        <path d="M 46 72 L 30 72 L 26 68" fill="none" stroke="#2563eb" stroke-width="0.8" />
        <text x="24" y="64" font-family="monospace" font-size="5.5" fill="#1e40af" font-weight="bold" text-anchor="end">BORO 3.3</text>
        <text x="24" y="70" font-family="monospace" font-size="5" fill="#64748b" text-anchor="end">250mL // ISO 4797</text>

        <!-- Base Dimension Caliper -->
        <line x1="48" y1="91" x2="122" y2="91" stroke="#2563eb" stroke-width="0.7" />
        <line x1="48" y1="89" x2="48" y2="93" stroke="#2563eb" stroke-width="0.7" />
        <line x1="122" y1="89" x2="122" y2="93" stroke="#2563eb" stroke-width="0.7" />
        <text x="85" y="94.5" font-family="monospace" font-size="5" fill="#2563eb" text-anchor="middle">Ø 74.0 mm</text>

        <!-- Vaporization vectors rising -->
        <path d="M 82 11 Q 78 4 84 1" fill="none" stroke="#0284c7" stroke-width="0.9" stroke-dasharray="2 2" />
        <path d="M 87 11 Q 92 5 88 1" fill="none" stroke="#0284c7" stroke-width="0.9" stroke-dasharray="2 2" />
      </g>

      <!-- ========================================================================= -->
      <!-- MODULE 2: DISTILLATION BRIDGE & LIEBIG CONDENSER (X: 135 -> 280)           -->
      <!-- ========================================================================= -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <g 
        class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        onmouseenter={() => activeItem = 'condenser'}
        onmouseleave={() => activeItem = null}
      >
        <!-- Distillation Elbow Neck from Flask -->
        <path 
          d="M 85 14 L 85 8 Q 85 4 90 4 L 140 4 Q 146 4 149 8 L 165 24" 
          fill="none" 
          stroke="#1e40af" 
          stroke-width="1.6" 
        />
        <path 
          d="M 89 14 L 89 10 Q 89 7 93 7 L 138 7 Q 142 7 145 10 L 160 25" 
          fill="none" 
          stroke="#3b82f6" 
          stroke-width="0.9" 
        />

        <!-- Thermometer Port at Top -->
        <rect x="134" y="1" width="10" height="5" fill="#ffffff" stroke="#1e40af" stroke-width="1" />
        <line x1="139" y1="1" x2="139" y2="12" stroke="#ef4444" stroke-width="1.2" />
        <circle cx="139" cy="13" r="1.5" fill="#ef4444" />
        <text x="146" y="3" font-family="monospace" font-size="5" fill="#ef4444" font-weight="bold">102°C</text>

        <!-- Outer Water Cooling Jacket (Liebig Jacket) -->
        <g transform="translate(170, 20) rotate(26)">
          <!-- Outer Jacket Cylinder -->
          <rect x="0" y="-8" width="90" height="16" rx="2" fill="rgba(224,242,254,0.4)" stroke="#1e40af" stroke-width="1.4" />
          
          <!-- Inner Condenser Tube -->
          <line x1="-8" y1="0" x2="98" y2="0" stroke="#1e40af" stroke-width="1.8" />
          <line x1="-8" y1="-2" x2="98" y2="-2" stroke="#60a5fa" stroke-width="0.7" stroke-dasharray="3 2" />
          <line x1="-8" y1="2" x2="98" y2="2" stroke="#60a5fa" stroke-width="0.7" stroke-dasharray="3 2" />

          <!-- Condensed Droplets along inner tube -->
          <circle cx="20" cy="0" r="1.2" fill="#2563eb" />
          <circle cx="45" cy="0" r="1.5" fill="#2563eb" />
          <circle cx="70" cy="0" r="1.8" fill="#10b981" />

          <!-- Cooling Water Nozzles -->
          <!-- Inflow at bottom right -->
          <line x1="75" y1="8" x2="75" y2="16" stroke="#0284c7" stroke-width="1.3" />
          <ellipse cx="75" cy="16" rx="3" ry="1.2" fill="#ffffff" stroke="#0284c7" stroke-width="0.9" />

          <!-- Outflow at top left -->
          <line x1="15" y1="-8" x2="15" y2="-16" stroke="#0284c7" stroke-width="1.3" />
          <ellipse cx="15" cy="-16" rx="3" ry="1.2" fill="#ffffff" stroke="#0284c7" stroke-width="0.9" />
        </g>

        <!-- Annotations for Water Flow -->
        <text x="254" y="80" font-family="monospace" font-size="5" fill="#0284c7" font-weight="bold">CW IN [18°C] ↑</text>
        <text x="178" y="11" font-family="monospace" font-size="5" fill="#0284c7" font-weight="bold">CW OUT [24°C] ↑</text>

        <!-- Vapor Flow Vector Arrow -->
        <path d="M 172 16 L 182 21" stroke="#2563eb" stroke-width="1" marker-end="url(#arrow-blue)" />

        <!-- Dimension Tag -->
        <text x="210" y="36" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">LIEBIG CONDENSER Ø22mm</text>
        <text x="210" y="42" font-family="monospace" font-size="4.5" fill="#64748b">VAPOR REFLUX EFFICIENCY 99.4%</text>
      </g>

      <!-- ========================================================================= -->
      <!-- MODULE 3: CLEVENGER OIL SEPARATOR & PHIAL RECEIVER (X: 280 -> 405)        -->
      <!-- ========================================================================= -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <g 
        class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        onmouseenter={() => activeItem = 'separator'}
        onmouseleave={() => activeItem = null}
      >
        <!-- Separation Funnel Pear Body -->
        <path 
          d="M 322 36 C 314 42 312 52 318 62 L 326 74 L 326 84 L 334 84 L 334 74 L 342 62 C 348 52 346 42 338 36 Z" 
          fill="#ffffff" 
          stroke="#1e40af" 
          stroke-width="1.6" 
          stroke-linejoin="round"
        />

        <!-- Top Adapter Ring -->
        <rect x="323" y="32" width="14" height="4" fill="#ffffff" stroke="#1e40af" stroke-width="1.2" />

        <!-- Liquid: Lower Hydrosol (Water Phase) -->
        <path 
          d="M 319 56 L 326 74 L 326 84 L 334 84 L 334 74 L 341 56 Q 330 57 319 56 Z" 
          fill="rgba(147,197,253,0.3)" 
        />

        <!-- Liquid: Upper Essential Oil Layer (Lớp tinh dầu nhẹ nổi bên trên) -->
        <path 
          d="M 317 48 C 315 51 316 54 319 56 Q 330 57 341 56 C 344 54 345 51 343 48 Q 330 46 317 48 Z" 
          fill="url(#oil-layer)" 
          stroke="#f59e0b"
          stroke-width="0.8"
        />

        <!-- Phase Boundary Line -->
        <line x1="319" y1="56" x2="341" y2="56" stroke="#d97706" stroke-width="1" stroke-dasharray="2 1" />

        <!-- PTFE Stopcock Valve -->
        <rect x="324" y="75" width="12" height="3" fill="#ffffff" stroke="#1e40af" stroke-width="1" />
        <line x1="330" y1="72" x2="330" y2="81" stroke="#2563eb" stroke-width="1.6" />
        <!-- Valve Handle -->
        <path d="M 330 72 L 336 70 M 330 72 L 324 70" stroke="#2563eb" stroke-width="1.2" />

        <!-- Pure Essential Oil Droplet Falling from Tip -->
        <path 
          d="M 330 87 C 328 89 327 91 330 93 C 333 91 332 89 330 87 Z" 
          fill="#10b981" 
          stroke="#059669" 
          stroke-width="0.8" 
        />

        <!-- Clevenger Return Arm (Tuần hoàn nước hydrosol ngược lại) -->
        <path 
          d="M 326 70 L 310 70 Q 306 70 306 65 L 306 38 Q 306 34 300 34 L 292 34" 
          fill="none" 
          stroke="#3b82f6" 
          stroke-width="1.1" 
          stroke-dasharray="3 2"
        />
        <path d="M 294 34 L 288 34" stroke="#2563eb" stroke-width="1" marker-end="url(#arrow-blue)" />

        <!-- Text Annotations for Phase Separation -->
        <line x1="343" y1="50" x2="356" y2="50" stroke="#f59e0b" stroke-width="0.8" />
        <line x1="356" y1="50" x2="362" y2="45" stroke="#f59e0b" stroke-width="0.8" />
        <text x="364" y="44" font-family="monospace" font-size="5" fill="#b45309" font-weight="bold">OIL LAYER [ρ = 0.89]</text>
        <text x="364" y="50" font-family="monospace" font-size="4.5" fill="#64748b">100% Pure Organic Phase</text>

        <line x1="341" y1="62" x2="356" y2="62" stroke="#3b82f6" stroke-width="0.8" />
        <text x="360" y="62" font-family="monospace" font-size="5" fill="#2563eb" font-weight="bold">HYDROSOL [H2O]</text>
        <text x="360" y="68" font-family="monospace" font-size="4.5" fill="#64748b">Closed-loop Reflux</text>

        <text x="330" y="96" font-family="monospace" font-size="4.5" fill="#059669" font-weight="bold" text-anchor="middle">V=0.05mL/DROP</text>
      </g>

      <!-- ========================================================================= -->
      <!-- MODULE 4: GC-MS SPECTROMETRY & MOLECULAR FORMULA (X: 430 -> 580)           -->
      <!-- ========================================================================= -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <g 
        class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        onmouseenter={() => activeItem = 'gcms'}
        onmouseleave={() => activeItem = null}
      >
        <!-- Frame container for GC-MS -->
        <rect x="430" y="10" width="145" height="74" rx="2" fill="rgba(248,250,252,0.8)" stroke="#cbd5e1" stroke-width="0.8" />
        
        <!-- Header tag inside box -->
        <text x="436" y="18" font-family="monospace" font-size="5" fill="#1e40af" font-weight="bold">GC-MS CHROMATOGRAM // FID DETECTOR</text>
        <text x="568" y="18" font-family="monospace" font-size="4.5" fill="#059669" font-weight="bold" text-anchor="end">PASSED COA</text>

        <!-- Axes: X = Retention Time (min), Y = Abundance -->
        <line x1="442" y1="24" x2="442" y2="72" stroke="#64748b" stroke-width="0.9" />
        <line x1="442" y1="72" x2="566" y2="72" stroke="#64748b" stroke-width="0.9" />

        <!-- X Ticks & Labels -->
        <g stroke="#94a3b8" stroke-width="0.6">
          <line x1="462" y1="72" x2="462" y2="74" />
          <line x1="487" y1="72" x2="487" y2="74" />
          <line x1="512" y1="72" x2="512" y2="74" />
          <line x1="537" y1="72" x2="537" y2="74" />
          <line x1="562" y1="72" x2="562" y2="74" />
        </g>
        <text x="462" y="78" font-family="monospace" font-size="4" fill="#64748b" text-anchor="middle">5m</text>
        <text x="487" y="78" font-family="monospace" font-size="4" fill="#64748b" text-anchor="middle">10m</text>
        <text x="512" y="78" font-family="monospace" font-size="4" fill="#64748b" text-anchor="middle">15m</text>
        <text x="537" y="78" font-family="monospace" font-size="4" fill="#64748b" text-anchor="middle">20m</text>
        <text x="562" y="78" font-family="monospace" font-size="4" fill="#64748b" text-anchor="middle">25m</text>

        <!-- Peak 1: Minor (Pinene) at t=468 -->
        <path d="M 444 72 L 464 72 Q 467 71 468 62 Q 469 71 472 72 L 485 72" fill="none" stroke="#2563eb" stroke-width="1" />
        <text x="468" y="59" font-family="monospace" font-size="4" fill="#2563eb" text-anchor="middle">Pinene</text>

        <!-- Peak 2: Moderate (Limonene) at t=495 -->
        <path d="M 485 72 Q 492 72 494 48 Q 495 72 502 72" fill="none" stroke="#2563eb" stroke-width="1.1" />
        <text x="494" y="44" font-family="monospace" font-size="4.5" fill="#2563eb" text-anchor="middle">Limonene</text>

        <!-- Peak 3: Massive Pure Key Peak (Linalool / Active Compound 99.8%) at t=516 -->
        <!-- Shaded Peak Area -->
        <path 
          d="M 508 72 Q 515 72 516 26 Q 517 72 524 72 Z" 
          fill="rgba(16,185,129,0.25)" 
          stroke="#10b981" 
          stroke-width="1.4" 
        />
        <!-- Peak Label with Callout Pointer -->
        <line x1="516" y1="26" x2="528" y2="24" stroke="#059669" stroke-width="0.8" />
        <text x="530" y="24" font-family="monospace" font-size="5" fill="#059669" font-weight="bold">RT 14.28m [99.8%]</text>
        <text x="530" y="30" font-family="monospace" font-size="4.5" fill="#1e40af" font-weight="bold">Linalool Pure Fraction</text>

        <!-- Terpene Molecular Skeletal Structure (C10H16 / C10H18O) -->
        <g stroke="#2563eb" stroke-width="0.9" fill="none">
          <path d="M 545 46 L 552 42 L 559 46 L 559 54 L 552 58 L 545 54 Z" />
          <line x1="552" y1="42" x2="552" y2="36" />
          <line x1="552" y1="36" x2="557" y2="33" />
          <line x1="552" y1="36" x2="547" y2="33" stroke-width="1.2" />
          <line x1="559" y1="54" x2="564" y2="57" />
        </g>
        <text x="544" y="65" font-family="monospace" font-size="4.5" fill="#1e40af" font-weight="bold">C₁₀H₁₈O</text>
      </g>

      <!-- ========================================================================= -->
      <!-- MODULE 5: ULTRASONIC NANO-DIFFUSION NOZZLE (X: 588 -> 712)                 -->
      <!-- ========================================================================= -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <g 
        class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        onmouseenter={() => activeItem = 'nano'}
        onmouseleave={() => activeItem = null}
      >
        <!-- Cross-section of HVAC Atomizing Nozzle -->
        <path 
          d="M 596 32 L 620 32 L 634 44 L 634 52 L 620 64 L 596 64 Z" 
          fill="#ffffff" 
          stroke="#1e40af" 
          stroke-width="1.4" 
        />
        <!-- Inner Venturi Chamber -->
        <path 
          d="M 596 42 L 616 42 L 628 47 L 628 49 L 616 54 L 596 54 Z" 
          fill="rgba(59,130,246,0.15)" 
          stroke="#2563eb" 
          stroke-width="0.9" 
        />

        <!-- Oil Capillary Feed Tube (from bottom) -->
        <line x1="608" y1="64" x2="608" y2="78" stroke="#1e40af" stroke-width="1.4" />
        <line x1="611" y1="64" x2="611" y2="78" stroke="#1e40af" stroke-width="1.4" />
        <line x1="609.5" y1="64" x2="609.5" y2="78" stroke="#10b981" stroke-width="1.5" />
        <text x="610" y="84" font-family="monospace" font-size="4.5" fill="#059669" font-weight="bold" text-anchor="middle">OIL FEED</text>

        <!-- Compressed Air Inlet (from left) -->
        <path d="M 588 48 L 596 48" stroke="#0284c7" stroke-width="1.2" marker-end="url(#arrow-cyan)" />
        <text x="590" y="28" font-family="monospace" font-size="4.5" fill="#0284c7" font-weight="bold">HVAC AIR IN</text>

        <!-- Micro Orifice Nozzle Tip (Ø 0.15mm) -->
        <rect x="634" y="46" width="3" height="4" fill="#2563eb" />

        <!-- Expanding Nano Mist Plume Cone -->
        <path 
          d="M 637 47 L 696 28 M 637 49 L 696 68" 
          stroke="#0284c7" 
          stroke-width="0.8" 
          stroke-dasharray="2 2" 
        />

        <!-- Dispersed Nano Droplets (< 0.1 um) -->
        <g fill="#0284c7" opacity="0.8">
          <circle cx="645" cy="48" r="0.8" />
          <circle cx="652" cy="44" r="0.7" />
          <circle cx="654" cy="52" r="0.8" />
          <circle cx="662" cy="41" r="0.6" />
          <circle cx="664" cy="48" r="0.7" />
          <circle cx="666" cy="55" r="0.6" />
          <circle cx="675" cy="36" r="0.5" />
          <circle cx="677" cy="45" r="0.6" />
          <circle cx="679" cy="53" r="0.5" />
          <circle cx="682" cy="60" r="0.5" />
          <circle cx="692" cy="32" r="0.4" />
          <circle cx="695" cy="42" r="0.5" />
          <circle cx="694" cy="50" r="0.4" />
          <circle cx="696" cy="62" r="0.4" />
        </g>

        <!-- Technical Annotation Callout -->
        <text x="668" y="24" font-family="monospace" font-size="5" fill="#0284c7" font-weight="bold">NANO MIST &lt; 0.1 µm</text>
        <text x="668" y="74" font-family="monospace" font-size="4.5" fill="#64748b">Zero Condensation</text>
      </g>

      <!-- ========================================================================= -->
      <!-- BOTTOM TECHNICAL SPECIFICATION STRIP                                     -->
      <!-- ========================================================================= -->
      <g font-family="monospace" font-size="4.5" fill="#475569">
        <text x="25" y="8" font-weight="bold">FIG. 01 // ESSENTIAL OIL STEAM EXTRACTION &amp; REFINING SCHEMATIC</text>
        <text x="705" y="8" text-anchor="end" font-weight="bold">SCALE: 1:2.5 [METRIC MM]</text>
      </g>
    </svg>

    <!-- Interactive Inspector Bar (Slides up when hovering an element) -->
    {#if activeItem}
      {@const item = items.find(i => i.id === activeItem)}
      {#if item}
        <div class="absolute bottom-1 left-3 right-3 bg-[#0c1633]/95 backdrop-blur-sm text-white px-3 py-1 font-mono text-[10px] flex items-center justify-between border border-[rgba(96,165,250,0.4)] shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-150 z-10">
          <div class="flex items-center gap-2">
            <span class="text-[#60a5fa] font-bold">[{item.name}]</span>
            <span class="text-[#cbd5e1] hidden sm:inline">{item.desc}</span>
          </div>
          <span class="text-emerald-400 font-bold shrink-0">{item.code}</span>
        </div>
      {/if}
    {/if}
  </div>
</div>
