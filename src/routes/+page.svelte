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

<div class="grid grid-cols-2 p-32">
	<div>
		<h1 class="text-5xl leading-normal font-semibold text-zinc-900 dark:text-white">
			Hello, I am <br />Max Kelly
		</h1>
		<h2 class="text-xl font-semibold text-zinc-600 dark:text-zinc-300 mt-2">Software Engineer</h2>
		<p class="font-medium text-zinc-600 dark:text-zinc-300 mt-4">
			A passionate developer that thinks about the small details.
		</p>
		<Button title="Message me">
			<Icon icon="ion:send" height={24} width={24} />
		</Button>
	</div>
	<div>
		<img class="h-80 w-80 ml-12 rounded-full" alt="Profile" src={profileImage} />
	</div>
</div>
