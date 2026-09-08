<script lang="ts">
  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<section class="relative bg-[#ffffff] text-[#090e1f] border-b border-[#e2e8f0]">
  <div class="strict-grid-container py-16 md:py-24">
    <div class="grid-ring bg-[#f8fafc] p-8 sm:p-14 rounded-lg flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <span class="snap-badge self-start">_GET STARTED/</span>
        <h2 class="h3 text-[#090e1f] max-w-2xl">One platform for every money movement</h2>
        <p class="p-lg text-[#475569] max-w-2xl">
          Ledger, connectivity, flows and reconciliation, one programmable foundation your engineers can build on from day one.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
        <button 
          type="button"
          onclick={onOpenDemo}
          class="btn-cta-primary !h-10 !px-8 cursor-pointer"
        >
          Book a demo
        </button>
        <a 
          href="https://portal.creditbird.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-cta-outline h-10 px-8 text-center"
        >
          Start building
        </a>
      </div>
    </div>
  </div>
</section>
