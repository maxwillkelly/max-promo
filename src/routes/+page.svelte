<script>
	const title = 'Max Kelly - Software Engineer';
	const description =
		'Portfolio website for Software Engineer Max Kelly. A showcase of my experience and skills.';
</script>

<svelte:head>
	<title>Max Kelly - Software Engineer</title>
	<meta name="description" content={description} />
	<!-- Open Graph Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<div class="p-24">
	<div class="w-1/2">
		<h1 class="text-5xl leading-normal font-semibold text-zinc-900 dark:text-white">
			Hello, I am <br />Max Kelly
		</h1>
		<h2 class="text-2xl font-semibold text-zinc-600 dark:text-zinc-300 mt-2">
			Software Engineer
		</h2>
		<p class="text-lg font-medium text-zinc-600 dark:text-zinc-300 mt-4">
			A passionate developer that thinks about the small details
		</p>
		<button
			class="py-4 px-4 mt-8 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-75"
		>
			Contact me
		</button>
	</div>
</div>
