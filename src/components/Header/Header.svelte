<script>
	import HeaderLink from "./HeaderLink.svelte";
</script>

<header>
	<nav>
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
						Icon when menu is closed.
			
						Menu open: "hidden", Menu closed: "block"
					  -->
						<svg
							class="block h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
						<!--
						Icon when menu is open.
			
						Menu open: "block", Menu closed: "hidden"
					  -->
						<svg
							class="hidden h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex flex-shrink-0 items-center">
						<img
							class="block h-8 w-auto lg:hidden"
							src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600"
							alt="Max Kelly"
						/>
						<img
							class="hidden h-8 w-auto lg:block"
							src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600"
							alt="Max Kelly"
						/>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<HeaderLink href="/">Home</HeaderLink>
							<HeaderLink href="/about">About</HeaderLink>
							<HeaderLink href="/experience">Experience</HeaderLink>

							<!-- <a
								href="/"
								class="bg-rose-600 text-white rounded-md px-3 py-2 text-sm font-medium"
								aria-current="page">Home</a
							>
							<a
								href="/about"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>About</a
							>
							<a
								href="/experience"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>Experience</a
							> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <span class="font-semibold text-xl text-zinc-500 dark:text-zinc-200">Max Kelly</span> -->
		<!-- <div class="w-full">
			<ul class="flex flex-col">
				<li>
					<a href="/" class="block">Home</a>
					<a href="/" class="block">About</a>
					<a href="/" class="block">Experience</a>
				</li>
			</ul>
		</div> -->
	</nav>
</header>
