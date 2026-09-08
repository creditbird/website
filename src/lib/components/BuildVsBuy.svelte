<script lang="ts">
  import { XCircle, CheckCircle2 } from 'lucide-svelte';

  const inHousePoints = [
    { num: '01', title: 'Phần mềm đóng gói, không sở hữu mã nguồn', desc: 'Dùng phần mềm SaaS đóng gói bị phụ thuộc vendor, chi phí bản quyền tăng theo người dùng, không thể tùy biến nghiệp vụ.' },
    { num: '02', title: 'CRM web chậm chạp, tốn RAM & tán xạ tin nhắn', desc: 'CRM nền web ngốn hàng gigabyte RAM, phân tán chat Zalo/Facebook/WhatsApp khiến nhân viên tư vấn dễ bỏ sót khách hàng.' },
    { num: '03', title: 'Tự tuyển dụng IT đắt đỏ, rủi ro nghỉ việc', desc: 'Mất nhiều tháng tìm kiếm kỹ sư giỏi, tốn kém chi phí quản lý nội bộ và rủi ro gián đoạn dự án khi nhân sự nghỉ đột ngột.' },
    { num: '04', title: 'Tự cấu hình ERP kéo dài, sai lệch tồn kho', desc: 'Tự xoay xở ERP hoặc dùng Excel dẫn đến sai định mức BOM sản xuất, tồn kho ảo WMS và báo cáo kế toán phân mảnh.' },
    { num: '05', title: 'Thiết bị trôi nổi & hương liệu không kiểm định', desc: 'Dùng máy phun giá rẻ mau hỏng, tinh dầu không rõ nguồn gốc thiếu chứng nhận COA làm giảm trải nghiệm khách hàng.' }
  ];

  const creditbirdPoints = [
    { num: '01', title: 'Viết phần mềm may đo, 100% full source code', desc: 'Kiến trúc Microservices hiện đại, chuyển giao toàn bộ mã nguồn sạch, tài liệu kỹ thuật chuẩn quốc tế và cam kết SLA trọn đời.' },
    { num: '02', title: 'RustSale CRM Omnichannel Native Rust', desc: 'Desktop native Rust siêu tốc, gom Zalo/WhatsApp/FB vào một hộp thư thống nhất, bảo mật Local-First Keyring.' },
    { num: '03', title: 'Cung ứng nhân sự IT phái cử trong 48 giờ', desc: 'Kỹ sư Senior (Frontend, Backend, DevOps, QA) onboard tức thì, thử việc 14 ngày, ký cam kết bảo mật NDA chặt chẽ.' },
    { num: '04', title: 'Kelvot ERP: Sản xuất BOM, Kho WMS & VAS/IFRS', desc: 'Phân hệ ERP chuyên sâu tại kelvot.com, chuẩn hóa sản xuất đa công đoạn, quản trị kho barcode và kế toán Việt Nam.' },
    { num: '05', title: 'Lemy Finest: Scent HVAC & Tinh dầu COA', desc: 'Máy khuếch tán Nano HVAC công suất lớn tại lemyfinest.com và 100% tinh dầu nguyên chất có kiểm nghiệm an toàn COA / GC-MS.' }
  ];
</script>

<section id="build-vs-buy" class="py-20 border-b border-[#e2e8f0] bg-[#f8fafc]">
  <div class="strict-grid-container">
    
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="snap-badge mb-3">_SO SÁNH HIỆU QUẢ/</span>
      <h2 class="section-title text-[#090e1f]">Tự triển khai phân mảnh hay Đồng hành cùng CreditBird?</h2>
      <p class="text-[#475569] text-base sm:text-lg mt-3 leading-relaxed">
        Tự xoay xở giữa nhiều nhà cung cấp phần mềm, công ty tuyển dụng và đại lý thiết bị tiêu tốn ngân sách lớn mà không đem lại sự đồng bộ và hiệu quả lâu dài.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
      
      <!-- Left Card: Tự triển khai -->
      <div class="bg-white border border-[#e2e8f0] p-7 sm:p-9 rounded-lg shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#e2e8f0]">
            <span class="snap-badge !bg-[#f1f5f9] !text-[#64748b] !border-[#cbd5e1]">_TỰ TRIỂN KHAI PHÂN MẢNH/</span>
            <span class="font-mono text-xs text-[#94a3b8] uppercase">Rủi ro & Chi phí ngầm</span>
          </div>
          
          <ul class="flex flex-col gap-6">
            {#each inHousePoints as pt}
              <li class="flex gap-4 items-start">
                <span class="font-mono text-sm font-semibold text-[#94a3b8] pt-0.5">{pt.num}</span>
                <div>
                  <div class="text-sm font-semibold text-[#334155] mb-0.5 flex items-center gap-1.5">
                    <XCircle size={15} class="text-[#e11d48] flex-shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-[#64748b] leading-relaxed">{pt.desc}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Right Card: Với CreditBird -->
      <div class="bg-white border-2 border-[var(--cb-cobalt-500)] p-7 sm:p-9 rounded-lg shadow-[0_8px_30px_rgba(37,99,235,0.08)] flex flex-col justify-between relative overflow-hidden">
        
        <div>
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#e2e8f0] relative z-10">
            <span class="snap-badge !bg-[rgba(37,99,235,0.08)] !text-[var(--cb-cobalt-500)] !border-[var(--cb-azure-500)]">
              _ĐỒNG HÀNH CÙNG CREDITBIRD/
            </span>
            <span class="font-mono text-xs text-[var(--cb-emerald-500)] font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--cb-emerald-500)]"></span>
              Hiệu Quả Cam Kết
            </span>
          </div>

          <ul class="flex flex-col gap-6 relative z-10">
            {#each creditbirdPoints as pt}
              <li class="flex gap-4 items-start">
                <span class="font-mono text-sm font-semibold text-[var(--cb-cobalt-500)] pt-0.5">{pt.num}</span>
                <div>
                  <div class="text-sm font-semibold text-[#090e1f] mb-0.5 flex items-center gap-1.5">
                    <CheckCircle2 size={15} class="text-[var(--cb-cobalt-500)] flex-shrink-0" />
                    <span>{pt.title}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-[#475569] leading-relaxed">{pt.desc}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>

      </div>

    </div>

    <!-- Bottom Action Link like Formance -->
    <div class="pt-2">
      <a href="#code-ledger" class="font-mono text-xs text-[var(--cb-cobalt-500)] hover:text-[var(--cb-azure-500)] inline-flex items-center gap-1.5 font-medium transition-transform hover:translate-x-1">
        Read our approach →
      </a>
    </div>

  </div>
</section>
