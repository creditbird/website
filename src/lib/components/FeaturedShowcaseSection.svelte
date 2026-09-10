<script lang="ts">
  import {
    Monitor,
    Layers,
    Droplets,
    Wind,
    Check,
    ArrowRight,
    ExternalLink,
    ShieldCheck,
    Sparkles,
    Cpu,
    Barcode,
    Flame
  } from 'lucide-svelte';
  import { localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();

  type ShowcaseTab = 'software' | 'erp' | 'scent';
  let activeTab = $state<ShowcaseTab>('software');
</script>

<section id="showcase" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">

      <!-- Top Section Header with Integrated Tab Selector -->
      <div data-auto-snap="true" class="snap-card free-flow flex flex-col justify-between grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _{m.showcase_badge()}/
          </span>
          <h2 class="h3 text-[#090e1f]">
            {m.showcase_title()}
          </h2>
          <p class="subheading-md text-[#475569]">
            {m.showcase_subtitle()}
          </p>
        </div>

        <!-- Integrated Tab Buttons -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1gu mt-1gu border-t border-[#f1f5f9]">
          <button
            type="button"
            onclick={() => activeTab = 'software'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'software' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Monitor size={16} class="shrink-0" />
            <span>{m.showcase_tab_rustsale()}</span>
          </button>

          <button
            type="button"
            onclick={() => activeTab = 'erp'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'erp' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Layers size={16} class="shrink-0" />
            <span>{m.showcase_tab_erp()}</span>
          </button>

          <button
            type="button"
            onclick={() => activeTab = 'scent'}
            class="px-4 py-2 font-mono text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer {activeTab === 'scent' ? 'bg-[var(--cb-cobalt-600)] text-white border-[var(--cb-cobalt-600)] shadow-xs' : 'bg-white text-[#475569] border-[#cbd5e1] hover:bg-[#f1f5f9]'}"
          >
            <Droplets size={16} class="shrink-0" />
            <span>{m.showcase_tab_scent()}</span>
          </button>
        </div>
      </div>

      <!-- TAB 1: PHẦN MỀM & RUSTSALE CRM -->
      {#if activeTab === 'software'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-center">

            <div class="lg:col-span-6 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_{m.showcase_tab1_badge()}</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                {m.showcase_tab1_title()}
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                {m.showcase_tab1_desc()}
              </p>

              <div class="flex flex-col gap-2 pt-2">
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>{m.showcase_tab1_feat1()}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>{m.showcase_tab1_feat2()}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-[#334155]">
                  <Check size={14} class="text-[var(--cb-emerald-500)] shrink-0" />
                  <span>{m.showcase_tab1_feat3()}</span>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-3 flex-wrap">
                <a href={localizeHref('/products/rustsale')} class="btn-cta-primary !h-9 text-xs px-5 inline-flex items-center gap-1.5">
                  <span>{m.showcase_tab1_btn_explore()}</span>
                  <ArrowRight size={13} class="shrink-0" />
                </a>
                <a href={localizeHref('/solutions/software')} class="btn-cta-outline !h-9 text-xs px-4 text-[#334155]">
                  <span>{m.showcase_tab1_btn_custom()}</span>
                </a>
              </div>
            </div>

            <!-- Visual Mockup Card -->
            <div class="lg:col-span-6 bg-[#090e1f] p-4 sm:p-5 border border-[#1e293b] text-white font-mono text-xs shadow-lg">
              <div class="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#10b981]"></span>
                  <span class="text-[#94a3b8] text-[11px] ml-2">{m.showcase_tab1_mockup_title()}</span>
                </div>
                <span class="text-[var(--cb-emerald-400)] text-[10px]">{m.showcase_tab1_mockup_connected()}</span>
              </div>

              <!-- Mockup Split View -->
              <div class="grid grid-cols-12 gap-3 text-[11px]">
                <!-- Column 1: Conversations List -->
                <div class="col-span-5 bg-[#0d1527] p-2.5 border border-[#1e293b] flex flex-col gap-2">
                  <div class="text-[10px] text-[#64748b] uppercase font-bold">{m.showcase_tab1_mockup_col1_header()}</div>
                  <div class="p-2 bg-[var(--cb-cobalt-500)]/30 border border-[var(--cb-azure-500)]/40 text-white">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[var(--cb-azure-300)] font-bold">{m.showcase_tab1_mockup_chat1_name()}</span>
                      <span class="text-[9px] text-[#94a3b8]">10:42</span>
                    </div>
                    <div class="truncate text-[10px] text-[#cbd5e1] mt-0.5">{m.showcase_tab1_mockup_chat1_preview()}</div>
                  </div>

                  <div class="p-2 bg-white/5 border border-white/5 text-[#94a3b8]">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[#10b981] font-bold">{m.showcase_tab1_mockup_chat2_name()}</span>
                      <span class="text-[9px]">09:15</span>
                    </div>
                    <div class="truncate text-[10px]">{m.showcase_tab1_mockup_chat2_preview()}</div>
                  </div>

                  <div class="p-2 bg-white/5 border border-white/5 text-[#94a3b8]">
                    <div class="flex justify-between items-center text-[10px]">
                      <span class="text-[#60a5fa] font-bold">{m.showcase_tab1_mockup_chat3_name()}</span>
                      <span class="text-[9px]">{m.showcase_tab1_mockup_time3()}</span>
                    </div>
                    <div class="truncate text-[10px]">{m.showcase_tab1_mockup_chat3_preview()}</div>
                  </div>
                </div>

                <!-- Column 2: Active Chat & Lead Details -->
                <div class="col-span-7 bg-[#0d1527] p-3 border border-[#1e293b] flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between border-b border-[#1e293b] pb-2 mb-2.5">
                      <span class="font-bold text-white text-xs">{m.showcase_tab1_mockup_col2_header()}</span>
                      <span class="px-1.5 py-0.5 bg-[#f59e0b]/20 text-[#fbbf24] text-[9px] font-bold">{m.showcase_tab1_mockup_badge_hot()}</span>
                    </div>
                    <div class="flex flex-col gap-2 text-[10px] text-[#cbd5e1]">
                      <div class="p-2 bg-white/5">
                        <span class="text-[#64748b]">{m.showcase_tab1_mockup_client_label()}</span> "{m.showcase_tab1_mockup_client_msg()}"
                      </div>
                      <div class="p-2 bg-[var(--cb-cobalt-500)]/20 border border-[var(--cb-cobalt-500)]/40 text-[var(--cb-azure-200)]">
                        <span class="text-[#93c5fd]">CreditBird:</span> "{m.showcase_tab1_mockup_cb_msg()}"
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-[#1e293b] flex items-center justify-between text-[10px] text-[#94a3b8]">
                    <span>{m.showcase_tab1_mockup_local_db()}</span>
                    <span class="text-[var(--cb-emerald-400)]">{m.showcase_tab1_mockup_local()}</span>
                  </div>
                </div>
              </div>

              <div class="mt-3 text-[10px] text-[#94a3b8] italic text-right">
                {m.showcase_tab1_mockup_note()}
              </div>
            </div>

          </div>
        </div>
      {/if}

      <!-- TAB 2: KELVOT ERP -->
      {#if activeTab === 'erp'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-center">

            <div class="lg:col-span-6 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_{m.showcase_tab2_badge()}</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                {m.showcase_tab2_title()}
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                {m.showcase_tab2_desc()}
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">{m.showcase_tab2_card1_title()}</div>
                  <p class="text-xs text-[#64748b]">{m.showcase_tab2_card1_desc()}</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">{m.showcase_tab2_card2_title()}</div>
                  <p class="text-xs text-[#64748b]">{m.showcase_tab2_card2_desc()}</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">{m.showcase_tab2_card3_title()}</div>
                  <p class="text-xs text-[#64748b]">{m.showcase_tab2_card3_desc()}</p>
                </div>
                <div class="p-3 border border-[#e2e8f0] bg-[#f8fafc]">
                  <div class="font-bold text-xs text-[#090e1f] mb-1">{m.showcase_tab2_card4_title()}</div>
                  <p class="text-xs text-[#64748b]">{m.showcase_tab2_card4_desc()}</p>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-3 flex-wrap">
                <a href={localizeHref('/solutions/erp')} class="btn-cta-primary !h-9 text-xs px-5 inline-flex items-center gap-1.5">
                  <span>{m.showcase_tab2_btn_details()}</span>
                  <ArrowRight size={13} class="shrink-0" />
                </a>
                <a href="https://kelvot.com" target="_blank" rel="noopener noreferrer" class="btn-cta-outline !h-9 text-xs px-4 text-[#334155] inline-flex items-center gap-1">
                  <span>{m.showcase_tab2_btn_website()}</span>
                  <ExternalLink size={12} class="shrink-0" />
                </a>
              </div>
            </div>

            <!-- ERP Visual Table Mockup -->
            <div class="lg:col-span-6 bg-white border border-[#cbd5e1] p-4 sm:p-5 shadow-sm font-sans text-xs">
              <div class="flex items-center justify-between border-b border-[#e2e8f0] pb-3 mb-3">
                <div class="flex items-center gap-2">
                  <Layers size={16} class="text-[var(--cb-cobalt-600)] shrink-0" />
                  <span class="font-bold text-[#090e1f]">{m.showcase_tab2_table_title()}</span>
                </div>
                <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">{m.showcase_tab2_table_status()}</span>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr class="bg-[#f8fafc] text-[#64748b] border-b border-[#e2e8f0]">
                      <th class="p-2">{m.showcase_tab2_th_code()}</th>
                      <th class="p-2">{m.showcase_tab2_th_name()}</th>
                      <th class="p-2 text-right">{m.showcase_tab2_th_norm()}</th>
                      <th class="p-2 text-right">{m.showcase_tab2_th_actual()}</th>
                      <th class="p-2 text-center">{m.showcase_tab2_th_status()}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#f1f5f9] text-[#334155]">
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">NVL-STEEL-01</td>
                      <td class="p-2">{m.showcase_tab2_row1_name()}</td>
                      <td class="p-2 text-right">1.200 {m.showcase_tab2_row_unit_kg()}</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">1.200 {m.showcase_tab2_row_unit_kg()}</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">{m.showcase_tab2_status_complete()}</span></td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">NVL-COPPER-04</td>
                      <td class="p-2">{m.showcase_tab2_row2_name()}</td>
                      <td class="p-2 text-right">450 {m.showcase_tab2_row_unit_kg()}</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">450 {m.showcase_tab2_row_unit_kg()}</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">{m.showcase_tab2_status_complete()}</span></td>
                    </tr>
                    <tr>
                      <td class="p-2 font-bold text-[var(--cb-cobalt-600)]">PK-BOLT-M6</td>
                      <td class="p-2">{m.showcase_tab2_row3_name()}</td>
                      <td class="p-2 text-right">5.000 {m.showcase_tab2_row_unit_pcs()}</td>
                      <td class="p-2 text-right font-bold text-[#090e1f]">5.000 {m.showcase_tab2_row_unit_pcs()}</td>
                      <td class="p-2 text-center"><span class="px-1.5 py-0.2 bg-green-100 text-green-800 text-[9px]">{m.showcase_tab2_status_complete()}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-4 p-3 bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-between text-xs">
                <span class="text-[#64748b]">{m.showcase_tab2_journal_label()}</span>
                <span class="font-mono font-bold text-[var(--cb-cobalt-600)]">{m.showcase_tab2_journal_val()}</span>
              </div>

              <div class="mt-2 text-[10px] text-[#64748b] italic">
                {m.showcase_tab2_table_note()}
              </div>
            </div>

          </div>
        </div>
      {/if}

      <!-- TAB 3: MÁY PHUN & TINH DẦU LEMY FINEST -->
      {#if activeTab === 'scent'}
        <div data-auto-snap="true" class="snap-card free-flow grid-ring bg-white p-1gu sm:p-2gu flex flex-col gap-1gu">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-1gu sm:gap-2gu items-start">

            <!-- Left Overview & Details -->
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-[var(--cb-cobalt-600)] font-bold tracking-wider uppercase">_{m.showcase_tab3_badge()}</span>
              </div>
              <h3 class="text-2xl font-bold text-[#090e1f]">
                {m.showcase_tab3_title()}
              </h3>
              <p class="text-sm text-[#475569] leading-relaxed">
                {m.showcase_tab3_desc()}
              </p>

              <div class="p-3.5 bg-[#edf2ff] border border-[#c2d2fc] text-xs text-[#1e293b] leading-relaxed">
                <strong class="text-[var(--cb-cobalt-600)] block mb-1">{m.showcase_tab3_policy_title()}</strong>
                • <strong>{m.showcase_tab3_policy_item1_label()}</strong> {m.showcase_tab3_policy_item1_val()}<br />
                • <strong>{m.showcase_tab3_policy_item2_label()}</strong> {m.showcase_tab3_policy_item2_val()}<br />
                • <strong>{m.showcase_tab3_policy_item3_label()}</strong> {m.showcase_tab3_policy_item3_val()}
              </div>

              <div class="flex items-center gap-3 pt-2 flex-wrap">
                <button
                  type="button"
                  onclick={onOpenDemo}
                  class="btn-cta-primary !h-9 text-xs px-4 cursor-pointer"
                >
                  {m.showcase_tab3_btn_consult()}
                </button>
                <a href={localizeHref('/solutions/scent-marketing')} class="btn-cta-outline !h-9 text-xs px-4 text-[#334155]">
                  <span>{m.showcase_tab3_btn_details()}</span>
                </a>
              </div>
            </div>

            <!-- Right: 2 Columns Product Cards (Hardware vs Essential Oils) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <!-- Product Card 1: Máy Phun Khuếch Tán -->
              <div class="p-1gu bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="font-mono text-[10px] text-[#64748b] font-bold uppercase">{m.showcase_tab3_card1_badge()}</span>
                    <span class="px-2 py-0.5 bg-blue-50 text-blue-700 font-mono text-[9px] font-bold border border-blue-200">{m.showcase_tab3_card1_tag()}</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#090e1f] mb-2">{m.showcase_tab3_card1_title()}</h4>

                  <div class="flex flex-col gap-2.5 text-xs text-[#475569] mb-4">
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">{m.showcase_tab3_card1_item1_label()}</strong>
                      {m.showcase_tab3_card1_item1_desc()}
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">{m.showcase_tab3_card1_item2_label()}</strong>
                      {m.showcase_tab3_card1_item2_desc()}
                    </div>
                  </div>
                  <div class="text-[10px] text-[#64748b] italic mb-2">
                    {m.showcase_tab3_card1_note()}
                  </div>
                </div>

                <a
                  href={localizeHref('/solutions/scent-marketing')}
                  class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1 font-semibold pt-2 border-t border-[#e2e8f0]"
                >
                  <span>{m.showcase_tab3_card1_link()}</span>
                  <ArrowRight size={12} class="shrink-0" />
                </a>
              </div>

              <!-- Product Card 2: Tinh Dầu Thiên Nhiên -->
              <div class="p-1gu bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <span class="font-mono text-[10px] text-[#64748b] font-bold uppercase">{m.showcase_tab3_card2_badge()}</span>
                    <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold border border-emerald-200">{m.showcase_tab3_card2_tag()}</span>
                  </div>
                  <h4 class="font-bold text-sm text-[#090e1f] mb-2">{m.showcase_tab3_card2_title()}</h4>

                  <div class="flex flex-col gap-2 text-xs text-[#475569] mb-4">
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">{m.showcase_tab3_card2_item1_label()}</strong>
                      {m.showcase_tab3_card2_item1_desc()}
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">{m.showcase_tab3_card2_item2_label()}</strong>
                      {m.showcase_tab3_card2_item2_desc()}
                    </div>
                    <div class="p-2 bg-white border border-[#e2e8f0]">
                      <strong class="text-[#090e1f] block">{m.showcase_tab3_card2_item3_label()}</strong>
                      {m.showcase_tab3_card2_item3_desc()}
                    </div>
                  </div>
                  <div class="text-[10px] text-[#64748b] italic mb-2">
                    {m.showcase_tab3_card2_note()}
                  </div>
                </div>

                <a
                  href={localizeHref('/solutions/scent-marketing')}
                  class="text-xs font-mono text-[var(--cb-cobalt-600)] hover:underline inline-flex items-center gap-1 font-semibold pt-2 border-t border-[#e2e8f0]"
                >
                  <span>{m.showcase_tab3_card2_link()}</span>
                  <ArrowRight size={12} class="shrink-0" />
                </a>
              </div>

            </div>

          </div>
        </div>
      {/if}

    </div>
  </div>
</section>
