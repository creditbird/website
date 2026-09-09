<script lang="ts">
  const problems = [
    {
      num: '01',
      title: 'Phần mềm may đo',
      text: 'Phần mềm đóng gói rập khuôn, thiếu khả năng mở rộng kiến trúc High-Concurrency, không bàn giao full mã nguồn.'
    },
    {
      num: '02',
      title: 'RustSale CRM',
      text: 'Tán xạ tin nhắn đa kênh (Zalo, WhatsApp, Facebook), CRM nền web ngốn nhiều RAM và chậm trễ phản hồi khách hàng.'
    },
    {
      num: '03',
      title: 'Nhân sự IT',
      text: 'Khó khăn tuyển dụng và duy trì nhân sự IT trình độ cao; chi phí quản lý đội ngũ kỹ sư nội bộ quá đắt đỏ và rủi ro.'
    },
    {
      num: '04',
      title: 'Kelvot ERP',
      text: 'Quản lý BOM sản xuất, kho WMS và báo cáo tài chính VAS/IFRS trên file rời rạc dẫn đến sai sót và tồn kho ảo.'
    },
    {
      num: '05',
      title: 'Lemy Finest Scent',
      text: 'Không gian showroom, khách sạn, văn phòng thiếu điểm nhấn cảm xúc; chưa tận dụng tiếp thị mùi hương Scent Marketing chuẩn COA.'
    }
  ];
</script>

<section 
  id="challenges" 
  class="relative theme-cobalt-primary dark bg-background text-foreground scroll-mt-20" 
  style="--section-accent:var(--cobalt-accent, #60a5fa)"
>
  <div class="strict-grid relative z-2 py-(--grid-unit)">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Header with Eyebrow, Heading, and Description -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground px-1gu py-2gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-(--grid-unit) items-center shrink-0 max-w-full whitespace-nowrap grid-ring w-(--_badge-mw) md:w-(--_badge-w) justify-center px-3 text-eyebrow-foreground bg-eyebrow-background self-start">
            _THÁCH THỨC DOANH NGHIỆP/
          </span>
          <h2 class="h3 text-foreground">Rào cản khi công nghệ và trải nghiệm bị phân mảnh</h2>
          <p class="subheading-md text-foreground">Quy trình thủ công, thiếu hụt nhân lực công nghệ và không gian thiếu dấu ấn.</p>
          <p class="p-md text-muted-foreground">Khi doanh nghiệp mở rộng quy mô, sự chắp vá giữa các phần mềm riêng lẻ, gánh nặng chi phí tuyển dụng IT và không gian kinh doanh chưa có bản sắc sẽ làm giảm năng suất và ảnh hưởng trực tiếp đến doanh thu.</p>
        </div>
      </div>

      <!-- Problem Cards with Shared Grid-Ring Lines -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:3] [--_col-gap-lg:calc(var(--grid-unit)*2)] grid-row-exact">
        {#each problems as item}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-background text-foreground p-1gu">
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <span class="badge-sm font-mono tabular-nums font-semibold" style="color:var(--section-accent)">{item.num}</span>
                <span class="font-mono text-[11px] text-muted-foreground uppercase">{item.title}</span>
              </div>
              <p class="p-md text-foreground">{item.text}</p>
            </div>
          </div>
        {/each}
      </div>

      <!-- Proof Callout Card (max-w-40gu self-start) -->
      <div class="snap-card h-(--_card-mh) md:h-(--_card-h) free-flow flex flex-col grid-ring bg-background text-foreground p-1gu max-w-40gu self-start">
        <p class="p-md text-foreground">
          <span class="badge-sm font-mono uppercase font-semibold mr-1" style="color:var(--section-accent)">_HỆ SINH THÁI ĐỒNG BỘ/ </span>
          CreditBird cung cấp giải pháp toàn diện: Viết phần mềm may đo, RustSale CRM, Kelvot ERP, Cho thuê nhân sự IT và Lemy Finest Scent Marketing.
        </p>
      </div>

    </div>
  </div>
</section>
