<script>
	import profileImage from '$lib/images/profile.jpg';
	import IoMdSend from 'svelte-icons/io/IoMdSend.svelte';

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

<div class="grid grid-cols-2 p-32">
	<div>
		<h1 class="text-5xl leading-normal font-semibold text-zinc-900 dark:text-white">
			Hello, I am <br />Max Kelly
		</h1>
		<h2 class="text-xl font-semibold text-zinc-600 dark:text-zinc-300 mt-2">Software Engineer</h2>
		<p class="font-medium text-zinc-600 dark:text-zinc-300 mt-4">
			A passionate developer that thinks about the small details.
		</p>
		<button
			class="py-4 px-4 mt-8 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-75"
		>
			<div class="flex">
				Message me <div class="h-6 w-6 ml-2"><IoMdSend /></div>
			</div>
		</button>
	</div>
	<div>
		<img class="h-80 w-80 ml-12 rounded-full" alt="Profile" src={profileImage} />
	</div>
</div>
