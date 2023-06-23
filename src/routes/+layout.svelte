<script>
	import Header from '../components/Header/Header.svelte';
	import './styles.css';
</script>

<div class="h-screen w-screen bg-white dark:bg-zinc-900 font-poppins">
	<div class="h-full w-full container mx-auto px-32">
		<Header />

		<main class="h-full">
			<slot />
		</main>
	</div>
</div>

<style>
</style>
