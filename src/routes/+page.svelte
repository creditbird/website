<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import TrustedBy from '$lib/components/TrustedBy.svelte';
  import WhySection from '$lib/components/WhySection.svelte';
  import TheProblemSection from '$lib/components/TheProblemSection.svelte';
  import FlowOfFundsSection from '$lib/components/FlowOfFundsSection.svelte';
  import CapabilitiesSection from '$lib/components/CapabilitiesSection.svelte';
  import ByTheNumbers from '$lib/components/ByTheNumbers.svelte';
  import CaptureNumscriptSection from '$lib/components/CaptureNumscriptSection.svelte';
  import BuildVsBuy from '$lib/components/BuildVsBuy.svelte';
  import LedgerPlayground from '$lib/components/LedgerPlayground.svelte';
  import FlowsSection from '$lib/components/FlowsSection.svelte';
  import ConnectivitySection from '$lib/components/ConnectivitySection.svelte';
  import ReconciliationSection from '$lib/components/ReconciliationSection.svelte';
  import SchemaBuilder from '$lib/components/SchemaBuilder.svelte';
  import VoicesSection from '$lib/components/VoicesSection.svelte';
  import TrustSection from '$lib/components/TrustSection.svelte';
  import UseCasesSection from '$lib/components/UseCasesSection.svelte';
  import CtaBanner from '$lib/components/CtaBanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import DemoModal from '$lib/components/DemoModal.svelte';

  let isDemoOpen = $state(false);

  function openDemo() {
    isDemoOpen = true;
  }

  function closeDemo() {
    isDemoOpen = false;
  }
</script>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[var(--cb-azure-500)]/20 selection:text-[#090e1f]">
  
  <!-- Navigation Header & Announcement Bar -->
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    <!-- 1. Hero Section (Luminous Light Cockpit) -->
    <HeroSection onOpenDemo={openDemo} />

    <!-- 2. Trusted By Teams Moving Money (10-Partner Grid-Ring Architecture) -->
    <TrustedBy />

    <!-- 3. Why CreditBird Core Pillars (Build Fast, Track Every Cent, Trust Your Ledger) -->
    <WhySection />

    <!-- 4. The Problem: A merchant balance is a moving target (Theme Emerald Dark Blueprint) -->
    <TheProblemSection />

    <!-- 5. Flow of Funds: From shopper capture to merchant payout (Theme Emerald Light Blueprint) -->
    <FlowOfFundsSection />

    <!-- 6. Capabilities: The primitives acquirers need (Theme Emerald Dark Blueprint) -->
    <CapabilitiesSection />

    <!-- 7. By The Numbers: Settlement-Grade Metrics Architecture (Theme Emerald Light Blueprint) -->
    <ByTheNumbers />

    <!-- 8. Numscript Split: The split happens at capture (Theme Emerald Dark Blueprint) -->
    <CaptureNumscriptSection />

    <!-- 9. Build vs Buy (Institutional Guarantees vs In-House Drift) -->
    <BuildVsBuy />

    <!-- 7. Programmable Ledger Sandbox (Numscript Double-Entry Engine) -->
    <LedgerPlayground />

    <!-- 8. Payment Flows & Workflows Orchestration -->
    <FlowsSection />

    <!-- 9. Multi-Rail Unified Connectivity (Stripe, Adyen, Wise) -->
    <ConnectivitySection />

    <!-- 10. Real-Time Reconciliation & Zero Drift Telemetry (D-5 to D-0 Drift Bars) -->
    <ReconciliationSection />

    <!-- 11. Schema Builder: Interactive Chart of Accounts in YAML & Node Flow -->
    <SchemaBuilder />

    <!-- 12. Voices: Trusted by Builders Customer Stories (Liberis, Doctolib, Payflip) -->
    <VoicesSection />

    <!-- 13. Enterprise Trust, Compliance Stack & SHA-256 Audit Log -->
    <TrustSection onOpenDemo={openDemo} />

    <!-- 14. Financial Architecture Use Cases Bento Grid -->
    <UseCasesSection />

    <!-- 15. High-Impact Pre-Footer Conversion Banner (_GET STARTED/) -->
    <CtaBanner onOpenDemo={openDemo} />
  </main>

  <!-- 16. Deep Architectural Footer -->
  <Footer onOpenDemo={openDemo} />

  <!-- Interactive Demo Walkthrough Dialog -->
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
