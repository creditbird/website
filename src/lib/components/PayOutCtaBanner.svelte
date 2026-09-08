<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowRight, Terminal } from 'lucide-svelte';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  let canvas: HTMLCanvasElement;

  onMount(() => {
    let animationFrameId: number;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 1000);
    let height = (canvas.height = canvas.offsetHeight || 350);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

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
          if (dist < 80) {
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

<!-- Formance Parity Section 11: _GET STARTED/ (Theme Emerald Dark Blueprint) -->
<section 
  id="get-started" 
  class="relative theme-emerald dark bg-background text-foreground" 
  style="--section-accent:var(--cobalt-accent, var(--theme-400, #3287ff))"
>
  <div class="strict-grid relative z-2 py-(--grid-unit) no-bg-grid">
    <div class="snap-block grid-ring free-flow relative bg-background p-2gu md:p-4gu overflow-hidden">
      <!-- Canvas Nodes Animation Overlay -->
      <div class="pointer-events-none absolute inset-0 z-0 opacity-50">
        <canvas bind:this={canvas} class="w-full h-full block"></canvas>
      </div>

      <div class="relative z-2 flex flex-col gap-6 max-w-3xl">
        <div class="flex flex-col gap-3">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _GET STARTED/
          </span>

          <h2 class="h3 max-w-[calc(var(--grid-unit-base)*34)] text-foreground">
            Pay out what you can prove
          </h2>

          <p class="p-lg max-w-[calc(var(--grid-unit-base)*32)] text-muted-foreground">
            See how CreditBird fits your settlement stack: book a demo or start building.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onclick={() => onOpenDemo?.()}
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-8 h-9 uppercase shadow-sm transition-colors"
          >
            Book a demo
          </button>

          <a
            href="https://cloud.creditbirdtech.com"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono font-medium border border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground px-8 h-9 uppercase"
          >
            Start building
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
