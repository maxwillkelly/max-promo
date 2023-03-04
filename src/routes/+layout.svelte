<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="h-screen w-screen bg-white dark:bg-zinc-900">
	<Header />

	<main class="h-full container mx-auto px-8">
		<slot />
	</main>
</div>

<style>
</style>
