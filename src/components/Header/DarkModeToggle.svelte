<script lang="ts">
	import Icon from '@iconify/svelte';

    import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

    if (browser) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>

<button on:click={handleSwitchDarkMode}>
	{#if darkMode}
		<Icon icon="ion:moon" class="text-zinc-300" />
	{:else}
		<Icon icon="ion:sunny" class="text-zinc-900" />
	{/if}
</button>
