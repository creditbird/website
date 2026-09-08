<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import AcquiringHero from '$lib/components/AcquiringHero.svelte';
  import TrustedBy from '$lib/components/TrustedBy.svelte';
  import TheProblemSection from '$lib/components/TheProblemSection.svelte';
  import FlowOfFundsSection from '$lib/components/FlowOfFundsSection.svelte';
  import CapabilitiesSection from '$lib/components/CapabilitiesSection.svelte';
  import ByTheNumbers from '$lib/components/ByTheNumbers.svelte';
  import CaptureNumscriptSection from '$lib/components/CaptureNumscriptSection.svelte';
  import VoicesSection from '$lib/components/VoicesSection.svelte';
  import TrustSection from '$lib/components/TrustSection.svelte';
  import ResourcesSection from '$lib/components/ResourcesSection.svelte';
  import AcquiringFaqSection from '$lib/components/AcquiringFaqSection.svelte';
  import PayOutCtaBanner from '$lib/components/PayOutCtaBanner.svelte';
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

<svelte:head>
  <title>Merchant Settlement & Acquiring Architecture — CreditBird</title>
  <meta name="description" content="Settlement-grade ledger architecture for payment facilitators, acquirers, and fintechs. Derived payables, declarative fee schedules, rolling reserves, and zero-drift reconciliation." />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-[#090e1f] font-sans selection:bg-[#059669]/20 selection:text-[#090e1f]">
  
  <!-- Navigation Header -->
  <Navbar onOpenDemo={openDemo} />

  <main class="flex-1">
    <article>
      <!-- Hero Section: _ACQUIRING/ (Cockpit Canvas + 4-Stage Interactive Pipeline) -->
      <AcquiringHero onOpenDemo={openDemo} />

      <!-- Section 1: _TRUSTED BY TEAMS MOVING MONEY/ (10-Partner Logo Grid) -->
      <TrustedBy />

      <!-- Section 2: _THE PROBLEM/ (A merchant balance is a moving target) -->
      <TheProblemSection />

      <!-- Section 3: _FLOW OF FUNDS/ (From shopper capture to merchant payout) -->
      <FlowOfFundsSection />

      <!-- Section 4: _CAPABILITIES/ (The primitives acquirers need) -->
      <CapabilitiesSection />

      <!-- Section 5: _BY THE NUMBERS/ (Settlement-grade, by design) -->
      <ByTheNumbers />

      <!-- Section 6: _NUMSCRIPT/ (The split happens at capture) -->
      <CaptureNumscriptSection />

      <!-- Section 7: _VOICES/ (Trusted by builders customer stories) -->
      <VoicesSection />

      <!-- Section 8: _TRUST/ (Built for regulated money & audit logs) -->
      <TrustSection onOpenDemo={openDemo} />

      <!-- Section 9: _RESOURCES/ (Keep going - docs, numscript, stories) -->
      <ResourcesSection />

      <!-- Section 10: FAQ (Acquiring, answered) -->
      <AcquiringFaqSection />

      <!-- Section 11: _GET STARTED/ (Pay out what you can prove) -->
      <PayOutCtaBanner onOpenDemo={openDemo} />
    </article>
  </main>

  <!-- Deep Architectural Footer -->
  <Footer onOpenDemo={openDemo} />

  <!-- Interactive Demo Walkthrough Dialog -->
  <DemoModal isOpen={isDemoOpen} onclose={closeDemo} />

</div>
