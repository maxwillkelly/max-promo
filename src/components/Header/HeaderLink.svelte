<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

    $: active = $page.url.pathname.endsWith(href);

	$: className = active
		? 'bg-rose-600 hover:bg-rose-800 text-white rounded-md px-3 py-2 text-sm font-medium'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
</script>

<a {href} class={className} aria-current={active}>
	<slot />
</a>