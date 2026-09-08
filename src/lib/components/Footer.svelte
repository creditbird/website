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
          <span class="font-mono text-xs text-[#94a3b8]">Cấp ngày: 19/11/2018</span>
        </div>
        <p class="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
          <strong>Địa chỉ trụ sở:</strong> 100/20 Đường 79, Phường Phước Long B, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam<br />
          <strong>Người đại diện theo pháp luật:</strong> TRẦN TRỌNG TRI • <strong>Cơ quan quản lý:</strong> Chi cục Thuế Thành phố Thủ Đức
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
        <button 
          type="button" 
          onclick={onOpenDemo}
          class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded text-xs font-mono font-medium bg-[#22439c] text-white hover:bg-[#3287ff] px-5 h-9 uppercase shadow-sm transition-colors"
        >
          Đặt lịch hẹn tư vấn
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
      
      <!-- COLUMN 1: PHẦN MỀM & ERP -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          PHẦN MỀM & KỸ THUẬT
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">VIẾT PHẦN MỀM MAY ĐO</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/software" class="hover:text-white transition-colors">Phát triển Phần mềm theo yêu cầu</a></li>
            <li><a href="/products/rustsale" class="hover:text-white transition-colors flex items-center gap-1.5">
              <span>RustSale CRM & Outreach Pro</span>
              <span class="font-mono text-[9px] px-1 py-0.2 bg-[var(--cb-cobalt-500)]/30 text-[var(--cb-azure-300)] border border-[var(--cb-azure-500)]/30 rounded">RUST</span>
            </a></li>
            <li><a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
              <span>Mã nguồn CreditBird (GitHub)</span>
              <span class="text-xs">↗</span>
            </a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">KELVOT ERP CHUYÊN SÂU</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/erp" class="hover:text-white transition-colors">ERP Sản xuất & Định mức BOM</a></li>
            <li><a href="/solutions/erp#wms" class="hover:text-white transition-colors">Quản lý Kho WMS & Barcode</a></li>
            <li><a href="/solutions/erp#accounting" class="hover:text-white transition-colors">Kế toán Quản trị VAS & IFRS</a></li>
            <li><a href="https://kelvot.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
              <span>Website chính thức Kelvot.com</span>
              <span class="text-xs">↗</span>
            </a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 2: NHÂN SỰ IT CHO DOANH NGHIỆP -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          NHÂN SỰ IT DOANH NGHIỆP
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">MÔ HÌNH HỢP TÁC (MST 0315397327)</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Cho thuê nhân sự IT Onsite tại văn phòng</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Biệt đội kỹ thuật Dedicated Remote Team</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Thuê kỹ sư theo dự án & linh hoạt theo tháng</a></li>
            <li><a href="/security" class="hover:text-white transition-colors">Ký kết NDA bảo mật tuyệt đối dữ liệu</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">CHUYÊN MÔN KỸ THUẬT SENIOR</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Senior Backend (Rust, Golang, Python, Node.js)</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Senior Frontend (SvelteKit, React, Vue.js)</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Kỹ sư DevOps, Docker, Kubernetes, CI/CD</a></li>
            <li><a href="/solutions/it-staffing" class="hover:text-white transition-colors">Chuyên gia Kiến trúc Microservices & Data QA</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 3: MÁY PHUN TINH DẦU & TINH DẦU -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          LEMY FINEST TINH DẦU
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">MÁY PHUN TINH DẦU THÔNG MINH</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Máy khuếch tán công nghiệp kết nối HVAC</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Thiết bị phủ hương diện tích 500 - 5.000m²</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Điều khiển lịch phun thông minh qua App/WiFi</a></li>
            <li><a href="/warranty" class="hover:text-white transition-colors">Bảo hành 12 - 24 tháng & đổi mới linh kiện</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">TINH DẦU THIÊN NHIÊN COA</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">100% Tinh dầu thiên nhiên kiểm định COA / GC-MS</a></li>
            <li><a href="/solutions/scent-marketing" class="hover:text-white transition-colors">Giải pháp Scent Marketing Khách sạn, Spa, Showroom</a></li>
            <li><a href="https://www.lemyfinest.com" target="_blank" rel="noopener noreferrer" class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1">
              <span>Website chính thức LemyFinest.com</span>
              <span class="text-xs">↗</span>
            </a></li>
            <li><a href="/warranty" class="hover:text-white transition-colors">Cung cấp định kỳ trọn gói chiết khấu cao</a></li>
          </ul>
        </div>
      </div>

      <!-- COLUMN 4: PHÁP LÝ & HỖ TRỢ -->
      <div class="flex flex-col gap-6">
        <div class="font-mono text-sm font-bold text-[#f8fafc] tracking-wider uppercase border-b border-[rgba(255,255,255,0.1)] pb-2">
          PHÁP LÝ & TÀI NGUYÊN
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">CHÍNH SÁCH DOANH NGHIỆP</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li><a href="/terms" class="hover:text-white transition-colors">Điều khoản dịch vụ & Bản quyền</a></li>
            <li><a href="/privacy" class="hover:text-white transition-colors">Chính sách bảo mật (Nghị định 13)</a></li>
            <li><a href="/warranty" class="hover:text-white transition-colors">Chính sách bảo hành thiết bị & SLA</a></li>
            <li><a href="/security" class="hover:text-white transition-colors">An toàn thông tin chuẩn ISO 27001</a></li>
          </ul>
        </div>

        <div>
          <div class="font-mono text-xs tracking-widest text-[#64748b] uppercase mb-2.5">CẨM NANG & HỖ TRỢ TRỰC TIẾP</div>
          <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
            <li>
              <a 
                href="https://app.notion.com/p/RustSale-CRM-Outreach-Pro-C-m-Nang-S-D-ng-To-n-T-p-3d2344ba47fa8114a415e5618ad83e39" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-white text-[var(--cb-azure-400)] transition-colors flex items-center gap-1"
              >
                <span>Cẩm nang RustSale (Notion)</span>
                <span class="text-xs">↗</span>
              </a>
            </li>
            <li>
              <a href="tel:0932640968" class="text-white font-semibold hover:text-[var(--cb-azure-400)] transition-colors">
                Hotline: 0932.640.968
              </a>
            </li>
            <li><a href="mailto:contact@creditbirdtech.com" class="hover:text-white transition-colors">contact@creditbirdtech.com</a></li>
            <li>
              <button type="button" onclick={onOpenDemo} class="text-[var(--cb-cobalt-400)] hover:text-white transition-colors cursor-pointer text-left">
                Đăng ký tư vấn trực tiếp →
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Footer Bottom Legal & Brand Bar -->
    <div class="border-t border-[rgba(50,135,255,0.14)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#64748b]">
      <div class="flex items-center gap-6 flex-wrap">
        <a href="/terms" class="hover:text-[#cbd5e1] transition-colors">Điều khoản dịch vụ</a>
        <a href="/privacy" class="hover:text-[#cbd5e1] transition-colors">Chính sách bảo mật</a>
        <a href="/warranty" class="hover:text-[#cbd5e1] transition-colors">Chính sách bảo hành & SLA</a>
        <a href="/security" class="hover:text-[#cbd5e1] transition-colors">An toàn thông tin</a>
        <a href="https://github.com/creditbird" target="_blank" rel="noopener noreferrer" class="hover:text-[#cbd5e1] transition-colors">GitHub CreditBird ↗</a>
      </div>
      <div class="flex items-center gap-2 text-center md:text-right">
        <span class="w-2 h-2 rounded-full bg-[var(--cb-emerald-500)] shrink-0"></span>
        <span>© 2018 - 2026 CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD • MST: 0315397327</span>
      </div>
    </div>

  </div>
</footer>
