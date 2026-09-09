<script lang="ts">
  const partners = [
    { name: 'Liberis', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Liberis-dark.svg', url: 'https://www.liberis.com/?ref=creditbird' },
    { name: 'Doctolib', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Doctolib-dark.svg', url: 'https://www.doctolib.fr/?ref=creditbird' },
    { name: 'Payflip', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Payflip-dark.svg', url: 'https://payflip.be/?ref=creditbird' },
    { name: 'Shares', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Shares-dark-1.svg', url: 'https://www.shares.io/fr?ref=creditbird' },
    { name: 'GetMomo', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/GetMomo-dark.svg', url: 'https://getmomo.de/?ref=creditbird' },
    { name: 'Mews', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Mews-dark.png', url: 'https://www.mews.com/fr' },
    { name: 'Bastion', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Bastion-dark-1.svg', url: 'https://bastion.com/?ref=creditbird' },
    { name: 'Deriv', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Deriv-dark.png', url: 'https://deriv.com/fr/eu/regulatory' },
    { name: 'Tembo', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Tembo-dark.png', url: 'https://www.tembomoney.com/' },
    { name: 'Stables', logo: 'https://35g9o342ii9njma6.public.blob.vercel-storage.com/Stables-dark.svg', url: 'https://stables.money/' }
  ];
</script>

<section id="partners" class="theme-emerald bg-background text-foreground scroll-mt-20" style="--section-accent:var(--cobalt-accent, var(--theme-700, #22439c))">
  <div class="strict-grid relative z-2 py-1gu no-bg-grid">
    <div class="flex flex-col gap-1gu">
      <span class="badge-sm font-mono uppercase tracking-widest md:whitespace-nowrap text-muted-foreground flex h-1gu items-center">
        _ĐỐI TÁC VÀ DOANH NGHIỆP ĐỒNG HÀNH CÙNG CREDITBIRD/
      </span>

      <!-- 2-Row x 5-Column Grid with Shared .grid-ring Hairlines -->
      <div class="grid grid-cols-2 sm:max-md:grid-cols-5 md:grid-cols-5">
        {#each partners as partner}
          <div class="grid-ring bg-background flex h-[calc(var(--grid-unit)*3)] items-center justify-center px-1gu">
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-center max-w-full transition-opacity hover:opacity-80"
            >
              <span class="sr-only">{partner.name}</span>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                width="400" 
                height="160" 
                loading="lazy" 
                class="h-10 md:h-12 w-auto max-w-full object-contain"
              />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
