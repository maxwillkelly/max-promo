<script lang="ts">
	export let title: string;
</script>

<button
	class="py-4 px-4 mt-8 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-75"
>
	<div class="flex">
		{title} 
		<div class="h-6 w-6 ml-2">
			<slot />
		</div>
	</div>
</button>
