<script>
	import Header from '../components/Header/Header.svelte';
	import '@fontsource/poppins';
	import './styles.css';
</script>

<div class="min-h-screen min-w-screen font-poppins bg-zinc-50 dark:bg-zinc-900">
	<Header />
	<div class="container mx-auto px-4 xl:px-32">
		<main class="h-full">
			<slot />
		</main>
	</div>
</div>
