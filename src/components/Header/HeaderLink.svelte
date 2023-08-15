<script lang="ts">
	import { scrollToCentre } from '$lib/utils/scroll';

	export let href: string;
</script>

<button
	class="rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-800 hover:text-white dark:text-zinc-300"
	on:click={() => scrollToCentre(href)}
>
	<slot />
</button>
