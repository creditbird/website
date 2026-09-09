<script lang="ts">
  import { ShieldCheck, Calendar, FileText, CheckCircle2, ArrowRight } from 'lucide-svelte';

  const commitments = [
    {
      metric: '2018',
      title: 'Năm thành lập',
      desc: 'Pháp nhân chính ngạch MST 0315397327 do Sở KH&ĐT TP. Hồ Chí Minh cấp phép.'
    },
    {
      metric: '100%',
      title: 'Bàn giao mã nguồn',
      desc: 'Khách hàng sở hữu toàn diện repo, kiến trúc và tài liệu cho các dự án may đo theo hợp đồng.'
    },
    {
      metric: 'COA / GC-MS',
      title: 'Kiểm nghiệm tinh dầu',
      desc: 'Các dòng tinh dầu thiên nhiên Lemy Finest có hồ sơ kiểm định và phân tích thành phần rõ ràng.'
    },
    {
      metric: 'B2B NDA',
      title: 'Pháp lý minh bạch',
      desc: 'Hợp đồng bảo mật thông tin, cam kết bảo hành và tiến độ triển khai có hiệu lực pháp lý.'
    }
  ];
</script>

<section id="about" class="relative theme-light bg-[#f8fafc] text-[#090e1f] scroll-mt-16">
  <div class="strict-grid relative z-2 py-1gu">
    <div class="flex flex-col gap-2gu">
      
      <!-- Top Card: Company Identity & Narrative -->
      <div class="snap-card free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu sm:p-2gu">
        <div class="flex flex-col gap-3 max-w-40gu">
          <span class="snap-badge badge-sm font-mono uppercase tracking-widest flex h-1gu items-center shrink-0 max-w-full whitespace-nowrap grid-ring px-3 text-[var(--cb-cobalt-600)] bg-[#edf2ff] border-[#c2d2fc] self-start">
            _VỀ CREDITBIRD (MST: 0315397327)/
          </span>
          <h2 class="h3 text-[#090e1f]">
            Tạo dựng giá trị thiết thực bằng công nghệ & trải nghiệm chất lượng
          </h2>
          <p class="subheading-md text-[#334155]">
            Được thành lập từ năm 2018 tại TP. Hồ Chí Minh, CreditBird tập trung vào 3 nhóm giải pháp thực tế: Phần mềm may đo theo yêu cầu, nền tảng Kelvot ERP và sản phẩm hương thơm Lemy Finest.
          </p>
          <div class="p-md text-[#475569] flex flex-col gap-3 leading-relaxed mt-1">
            <p>
              Chúng tôi hiểu rằng mỗi doanh nghiệp đều có quy trình làm việc đặc thù. Chúng tôi bắt đầu từ nhu cầu thực tế để đề xuất giải pháp phù hợp với quy trình và ngân sách của khách hàng: chuyển giao trọn vẹn quyền kiểm soát mã nguồn phần mềm, chuẩn hóa nghiệp vụ sản xuất - kho bãi với Kelvot ERP, và nâng tầm không gian kinh doanh bằng máy khuếch tán cùng tinh dầu thiên nhiên Lemy Finest.
            </p>
            <p>
              <strong>Về các thương hiệu trong hệ sinh thái:</strong> <strong class="text-[var(--cb-cobalt-600)]">Kelvot ERP</strong> (kelvot.com) là giải pháp quản trị doanh nghiệp chuyên sâu và <strong class="text-[var(--cb-cobalt-600)]">Lemy Finest</strong> (lemyfinest.com) là thương hiệu sản phẩm hương thơm trực thuộc CreditBird. Cách tổ chức này giúp khách hàng tiếp cận đúng chuyên môn và được hỗ trợ bởi đội ngũ kỹ thuật am hiểu nhất.
            </p>
          </div>
        </div>
      </div>

      <!-- 4 Fact-Based Commitment Cards: Abutting Formance Telemetry cells (gap: 0, 12 GU each) -->
      <div class="free-flow grid-row [--_cols-md:2] [--_cols-lg:4] !gap-0">
        {#each commitments as c}
          <div data-auto-snap="true" class="snap-group-item free-flow flex flex-col grid-ring bg-white text-[#090e1f] p-1gu justify-center min-h-[calc(var(--grid-unit)*6)]">
            <span class="font-mono text-xl sm:text-2xl font-bold text-[var(--cb-cobalt-600)] mb-1">{c.metric}</span>
            <span class="font-semibold text-sm text-[#090e1f] mb-1.5">{c.title}</span>
            <p class="text-xs text-[#64748b] leading-relaxed">{c.desc}</p>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
