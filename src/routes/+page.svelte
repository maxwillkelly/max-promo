<script>
	const title = "Max Kelly - Software Engineer";
	const description = "Portfolio website for Software Engineer Max Kelly. A showcase of my experience and skills.";
</script>

<svelte:head>
	<title>Max Kelly - Software Engineer</title>
	<meta
		name="description"
		content={description}
	/>
	<!-- Open Graph Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<div class="p-24">
	<div class="w-1/2">
		<h1 class="text-6xl text-center text-slate-900 dark:text-white">Hello, I am Max Kelly</h1>
		<h2 class="text-xl text-center text-slate-800 dark:text-slate-100 mt-4">Software Engineer</h2>
		<h3 class="text-lg text-center text-slate-800 dark:text-slate-100 mt-4">
			A passionate developer that thinks about the small details
		</h3>
	</div>
</div>
