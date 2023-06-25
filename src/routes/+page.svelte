<script lang="ts">
	import Icon from '@iconify/svelte';
	import profileImage from '$lib/images/profile.jpg';
	import Button from '../components/common/Button.svelte';

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

<div class="grid gap-3 sm:gap-9 place-items-center md:grid-cols-2 px-12 sm:p-16 md:p-28 lg:p-32">
	<img
		class="h-48 w-48 sm:h-56 sm:w-56 lg:h-80 lg:w-80 lg:ml-12 rounded-full md:order-last"
		alt="Profile"
		src={profileImage}
	/>
	<div class="flex flex-col items-center justify-center">
		<h1
			class="text-3xl sm:text-4xl lg:text-5xl text-center leading-normal lg:leading-relaxed font-semibold text-zinc-900 dark:text-white"
		>
			Hello, I am <br />Max Kelly
		</h1>
		<h2
			class="text-md sm:text-lg lg:text-xl text-center leading-normal lg:leading-relaxed font-semibold text-zinc-600 dark:text-zinc-300 mt-2"
		>
			Software Engineer
		</h2>
		<p class="text-sm text-center leading-normal lg:leading-relaxed font-medium text-zinc-600 dark:text-zinc-300 mt-4">
			A passionate developer that thinks about the small details.
		</p>
		<Button title="Message me">
			<Icon icon="ion:send" height={24} width={24} />
		</Button>
	</div>
</div>
