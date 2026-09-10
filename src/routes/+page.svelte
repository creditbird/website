<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import CoreDomainsSection from '$lib/components/CoreDomainsSection.svelte';
  import FeaturedShowcaseSection from '$lib/components/FeaturedShowcaseSection.svelte';
  import HowWeWorkSection from '$lib/components/HowWeWorkSection.svelte';
  import RealUseCasesSection from '$lib/components/RealUseCasesSection.svelte';
  import CtaBanner from '$lib/components/CtaBanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }
</script>

<SeoHead />

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">

  <!-- Navigation Header & Announcement Bar -->
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    <!-- 1. Hero Section: Mở đầu tổng quan & định vị 3 nhóm hoạt động -->
    <HeroSection onOpenDemo={openDemo} />

    <!-- 2. Về CreditBird: Hồ sơ pháp nhân thật từ 2018 & cam kết minh bạch -->
    <AboutSection />

    <!-- 3. Lĩnh vực hoạt động: 3 nhóm chính (Phần mềm & RustSale, Kelvot ERP, Tinh dầu & Máy phun) -->
    <CoreDomainsSection />

    <!-- 4. Sản phẩm & giải pháp tiêu biểu: Giao diện minh họa & thông số sản phẩm -->
    <FeaturedShowcaseSection onOpenDemo={openDemo} />

    <!-- 5. Cách CreditBird làm việc: Phân biệt 2 luồng quy trình thực tế -->
    <HowWeWorkSection />

    <!-- 6. Lĩnh vực ứng dụng thực tế: 4 bài toán doanh nghiệp theo ngành -->
    <RealUseCasesSection />

    <!-- 7. Liên hệ tư vấn: Chọn 1 trong 3 nhu cầu, gửi yêu cầu hoặc gọi trực tiếp -->
    <CtaBanner onOpenDemo={openDemo} />
  </main>

  <!-- Institutional Footer: Tập trung đầy đủ pháp nhân và liên kết -->
  <Footer onOpenDemo={openDemo} />

  <!-- Real Lead Contact Modal -->
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
