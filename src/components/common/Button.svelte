<script lang="ts">
	export let title: string;
</script>

<button
	class="mt-8 rounded-lg bg-rose-600 px-4 py-4 font-semibold text-white shadow-md hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-75"
>
	<div class="flex">
		{title}
		<div class="ml-2 h-6 w-6">
			<slot />
		</div>
	</div>
</button>
