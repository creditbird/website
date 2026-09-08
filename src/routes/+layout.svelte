<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>CÔNG TY TNHH CÔNG NGHỆ CREDITBIRD — Phần mềm, ERP, Nhân sự IT & Scent Marketing</title>
	<meta name="description" content="CreditBird (MST: 0315397327) chuyên nghiệp trong: Viết phần mềm may đo, phát triển ERP doanh nghiệp, cho thuê nhân sự IT, hệ thống máy phun tinh dầu thông minh và tinh dầu thiên nhiên nguyên chất." />
</svelte:head>

{@render children()}
