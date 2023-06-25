<script>
	import Header from '../components/Header/Header.svelte';
	import '@fontsource/poppins';
	import './styles.css';
</script>

<div class="min-h-screen min-w-screen font-poppins bg-white dark:bg-zinc-900">
	<div class="container mx-auto px-4 xl:px-32">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>
