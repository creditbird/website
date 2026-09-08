<script lang="ts">
  import { onMount } from 'svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  let activeStep = $state(1);
  const steps = [
    { name: 'capture', label: 'shopper payment', isAccent: false },
    { name: 'fee split', label: 'schedule applied', isAccent: true },
    { name: 'reserve', label: 'rolling hold', isAccent: true },
    { name: 'payout', label: 'merchant settled', isAccent: false }
  ];

  let canvas: HTMLCanvasElement;

  onMount(() => {
    let animationFrameId: number;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 1200);
    let height = (canvas.height = canvas.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle mesh
      ctx.fillStyle = 'rgba(50, 135, 255, 0.35)';
      ctx.strokeStyle = 'rgba(50, 135, 255, 0.18)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div 
  class="relative overflow-hidden snap-h-px -mt-[calc(var(--grid-unit)*3*var(--header-offset-scale,1))] pt-[calc(var(--grid-unit)*3*var(--header-offset-scale,1))] md:-mt-[calc(var(--header-h)*var(--header-offset-scale,1))] md:pt-[calc(var(--header-h)*var(--header-offset-scale,1))] theme-emerald dark bg-background text-foreground"
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <!-- Background Canvas Particle Animation -->
  <div class="pointer-events-none absolute inset-0 z-0">
    <div class="relative mx-auto h-full w-full min-[1920px]:max-w-50gu">
      <canvas bind:this={canvas} class="absolute inset-0 block w-full h-full"></canvas>
    </div>
  </div>

  <div class="relative z-10 mx-auto w-full max-w-7xl px-6">
    <div class="flex flex-col items-center gap-12 pt-20 text-center md:pt-24">
      
      <!-- Eyebrow & Hero Headings -->
      <div class="flex flex-col items-center gap-3">
        <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background">
          _ACQUIRING/
        </span>

        <h1 class="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Merchant settlement that adds up, every day
        </h1>

        <p class="p-lg max-w-3xl text-muted-foreground">
          Run fee schedules, rolling reserves, and payout cycles on a ledger that keeps every merchant's position exact — through chargebacks, refunds, and everything else.
        </p>
      </div>

      <!-- Hero Call To Actions -->
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onclick={onOpenDemo}
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-8 h-9 uppercase shadow-sm transition-colors"
        >
          Book a demo
        </button>
        <a 
          href="https://portal.creditbird.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium border border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground px-8 h-9 uppercase"
        >
          Start building
        </a>
      </div>

      <!-- 4-Stage Settlement Pipeline Flow (Formance Parity) -->
      <div class="mx-auto w-full max-w-[640px]">
        <div class="flex items-start mx-auto" style="width:min(100%, calc(var(--grid-unit)*26))">
          <!-- 1. capture -->
          <div class="flex flex-col items-center gap-[calc(var(--grid-unit)*0.5)]">
            <div style="width:calc(var(--grid-unit)*2);height:calc(var(--grid-unit)*2);border:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent);background-color:transparent"></div>
            <span class="badge-sm font-mono text-muted-foreground">capture</span>
          </div>

          <!-- Connector 1 -->
          <div class="flex items-center" style="flex:1;height:calc(var(--grid-unit)*2)">
            <div class="h-px flex-1" style="background-color:color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)"></div>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" class="shrink-0 -ml-px">
              <path d="M1 1L4 3.5L1 6" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
            </svg>
          </div>

          <!-- 2. fee split -->
          <div class="flex flex-col items-center gap-[calc(var(--grid-unit)*0.5)]">
            <div style="width:calc(var(--grid-unit)*2);height:calc(var(--grid-unit)*2);border:1px solid var(--section-accent);background-color:color-mix(in srgb, var(--section-accent) 8%, transparent)"></div>
            <span class="badge-sm font-mono text-muted-foreground">fee split</span>
          </div>

          <!-- Connector 2 -->
          <div class="flex items-center" style="flex:1;height:calc(var(--grid-unit)*2)">
            <div class="h-px flex-1" style="background-color:color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)"></div>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" class="shrink-0 -ml-px">
              <path d="M1 1L4 3.5L1 6" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
            </svg>
          </div>

          <!-- 3. reserve -->
          <div class="flex flex-col items-center gap-[calc(var(--grid-unit)*0.5)]">
            <div style="width:calc(var(--grid-unit)*2);height:calc(var(--grid-unit)*2);border:1px solid var(--section-accent);background-color:color-mix(in srgb, var(--section-accent) 8%, transparent)"></div>
            <span class="badge-sm font-mono text-muted-foreground">reserve</span>
          </div>

          <!-- Connector 3 -->
          <div class="flex items-center" style="flex:1;height:calc(var(--grid-unit)*2)">
            <div class="h-px flex-1" style="background-color:color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)"></div>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" class="shrink-0 -ml-px">
              <path d="M1 1L4 3.5L1 6" stroke="color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent)" stroke-width="1"></path>
            </svg>
          </div>

          <!-- 4. payout -->
          <div class="flex flex-col items-center gap-[calc(var(--grid-unit)*0.5)]">
            <div style="width:calc(var(--grid-unit)*2);height:calc(var(--grid-unit)*2);border:1px solid color-mix(in srgb, var(--grid-line-color) calc(var(--grid-line-opacity) * 100%), transparent);background-color:transparent"></div>
            <span class="badge-sm font-mono text-muted-foreground">payout</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Formance Architectural Blueprint Boundary Box -->
  <div class="pointer-events-none absolute inset-0 z-20 border-x border-b mx-auto w-full border-border min-[1920px]:max-w-50gu"></div>
</div>
