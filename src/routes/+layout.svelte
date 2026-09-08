<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>CreditBird — Programmable Credit & Ledger Infrastructure</title>
	<meta name="description" content="The open-source programmable ledger for fiat and digital credit. Model any flow of funds, track every cent in real time, and build on the immutable system of record." />
</svelte:head>

{@render children()}
