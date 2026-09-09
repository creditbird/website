<script lang="ts">
  let { onOpenDemo }: { onOpenDemo?: () => void } = $props();
</script>

<footer id="footer-links" class="theme-footer relative overflow-hidden bg-[#0a1329] text-[#cbd5e1] border-t border-[rgba(74,144,226,0.2)]">
  
  <!-- Giant Subtle Watermark Emblem -->
  <div class="footer-watermark"></div>

  <div class="strict-grid-container pt-16 pb-12 relative z-10">
    
    <!-- Company Legal Identity Top Box -->
    <div class="p-6 sm:p-8 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div class="flex flex-col gap-2 max-w-3xl">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="font-mono text-sm font-bold text-white tracking-wide uppercase">CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD</span>
          <span class="snap-badge badge-sm font-mono text-xs px-2 py-0.5 bg-[var(--cb-cobalt-500)]/20 text-[var(--cb-cobalt-300)] border border-[var(--cb-cobalt-500)]/40 rounded">MST: 0315397327</span>
          <span class="font-mono text-xs text-[#94a3b8]">Thành lập: 19/11/2018</span>
        </div>
        <p class="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
          <strong>Địa chỉ trụ sở:</strong> 100/20 Đường 79, Phường Phước Long, TP Hồ Chí Minh, Việt Nam<br />
          <strong>Người đại diện theo pháp luật:</strong> TRẦN TRỌNG TRI • <strong>Cơ quan quản lý:</strong> Chi cục Thuế TP. Hồ Chí Minh
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
        <button 
          type="button" 
          onclick={onOpenDemo}
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded text-xs font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-5 h-9 uppercase shadow-sm transition-colors"
        >
          Nhận tư vấn
        </button>
        <a 
          href="tel:0932640968" 
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded text-xs font-mono font-medium border border-[rgba(255,255,255,0.2)] bg-transparent hover:bg-white/10 text-white px-5 h-9"
        >
          Hotline: 0932.640.968
        </a>
      </div>
    </div>

    <!-- 4 Structured Columns Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
      
      <!-- COLUMN 1: PHẦN MỀM & RUSTSALE -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          PHẦN MỀM THEO YÊU CẦU
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">DỊCH VỤ MAY ĐO</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/software" class="hover:text-white transition-colors">May đo Web & Mobile App theo yêu cầu</a></li>
            <li><a href="/solutions/software" class="hover:text-white transition-colors">Kiến trúc Microservices, bàn giao 100% code</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Cho thuê nhân sự IT Senior (Onsite/Remote)</a></li>
            <li><a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
              <span>Kho mã nguồn mở (GitHub)</span>
              <span class="text-xs">↗</span>
            </a></li>
            <li><a href="https://www.facebook.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
              <span>Fanpage chính thức (Facebook)</span>
              <span class="text-xs">↗</span>
            </a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">SẢN PHẨM RUSTSALE CRM</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/products/rustsale" class="hover:text-white transition-colors flex items-center gap-1.5">
              <span>Hộp thư hội tụ Zalo, WhatsApp, Messenger</span>
              <span class="font-mono text-[9px] px-1 py-0.2 bg-[var(--cb-cobalt-500)]/30 text-[var(--cb-azure-300)] border border-[var(--cb-azure-500)]/30 rounded">RUST</span>
            </a></li>
            <li><a href="/products/rustsale" class="hover:text-white transition-colors">Bảo mật lưu trữ cục bộ Local Keyring</a></li>
            <li>
              <a 
                href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1"
              >
                <span>Cẩm nang sử dụng toàn tập (Notion)</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 2: KELVOT ERP -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          GIẢI PHÁP KELVOT ERP
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">PHÂN HỆ NGHIỆP VỤ</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">Quản lý Định mức Sản xuất Multi-BOM</a></li>
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">Quản lý Kho WMS quét mã Barcode/QR</a></li>
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">Kế toán Quản trị chuẩn VAS (TT200) & IFRS</a></li>
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">Đối soát dòng tiền và tính giá thành tự động</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">THƯƠNG HIỆU ĐỘC LẬP</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li>
              <a href="https://kelvot.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
                <span>Cổng thông tin chính thức Kelvot.com</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">Đăng ký khảo sát & bản quyền triển khai</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 3: TINH DẦU & MÁY PHUN LEMY FINEST -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          LEMY FINEST TINH DẦU
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">MÁY PHUN KHUẾCH TÁN NANO</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Máy khuếch tán để bàn phòng làm việc</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Máy công nghiệp kết nối điều hòa HVAC (500 - 5.000m²)</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Dịch vụ thuê máy & nạp tinh dầu định kỳ</a></li>
            <li><a href="/warranty" class="hover:text-white transition-colors">Bảo hành thiết bị theo hợp đồng & gói dịch vụ</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">TINH DẦU THIÊN NHIÊN COA</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Tinh dầu thiên nhiên có kiểm định COA / GC-MS</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Bảng mùi hương cho Khách sạn, Spa, Showroom</a></li>
            <li>
              <a href="https://www.lemyfinest.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
                <span>Website chính thức LemyFinest.com</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 4: PHÁP LÝ & HỖ TRỢ -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          HỒ SƠ PHÁP LÝ & LIÊN HỆ
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">QUY ĐỊNH & BẢO HÀNH</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/terms" class="hover:text-white transition-colors">Điều khoản dịch vụ & Sở hữu trí tuệ</a></li>
            <li><a href="/privacy" class="hover:text-white transition-colors">Chính sách bảo mật dữ liệu (NĐ 13/2023)</a></li>
            <li><a href="/warranty" class="hover:text-white transition-colors">Chính sách bảo hành phần mềm & thiết bị</a></li>
            <li><a href="/security" class="hover:text-white transition-colors">Tiêu chuẩn an toàn thông tin</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">LIÊN HỆ TRỰC TIẾP</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li>
              <a href="tel:0932640968" class="text-white font-semibold hover:text-[var(--cb-azure-400)] transition-colors">
                Hotline: 0932 640 968
              </a>
            </li>
            <li>
              <a href="https://zalo.me/0932640968" target="_blank" rel="noopener noreferrer" class="text-[var(--cb-azure-400)] hover:underline">
                Zalo: 0932 640 968
              </a>
            </li>
            <li>
              <button type="button" onclick={onOpenDemo} class="text-[var(--cb-cobalt-400)] hover:text-white transition-colors cursor-pointer text-left font-medium">
                Gửi form yêu cầu tư vấn →
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Bottom Copyright Hairline -->
    <div class="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)]"></span>
        <span>© 2018 - 2026 CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD (MST: 0315397327). All rights reserved.</span>
      </div>
      <div class="flex items-center gap-4 text-[11px] font-mono flex-wrap">
        <a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">GitHub</a>
        <span>•</span>
        <a href="https://www.facebook.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Facebook</a>
        <span>•</span>
        <a href="/terms" class="hover:text-white transition-colors">Điều khoản</a>
        <span>•</span>
        <a href="/privacy" class="hover:text-white transition-colors">Bảo mật</a>
        <span>•</span>
        <a href="/warranty" class="hover:text-white transition-colors">Bảo hành</a>
      </div>
    </div>

  </div>
</footer>
