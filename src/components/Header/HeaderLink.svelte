<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let href: string;

	const scrollIntoView: MouseEventHandler<HTMLButtonElement> = (event) => {
		const el = document.querySelector(href.slice(1));

		if (!el) return;

		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<button
	class="rounded-md px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-800 hover:text-white dark:text-zinc-300"
	on:click={scrollIntoView}
>
	<slot />
</button>
