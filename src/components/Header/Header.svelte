<script lang="ts">
	import HeaderLink from './HeaderLink.svelte';
	import DarkModeToggle from './DarkModeToggle.svelte';

	let isMenuOpen = false;

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	type Link = {
		name: string;
		href: string;
	};

	const links: Link[] = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/#about'
		},
		{
			name: 'Experience',
			href: '/#experience'
		}
	];
</script>

<header>
	<nav class="shadow dark:shadow-none">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded={isMenuOpen ? 'true' : 'false'}
						on:click={toggleMenu}
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
				<a href="/"
					><img
						class="block h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600"
						alt="Max Kelly"
					/></a
				>
				<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between sm:ml-6">
					<div>
						{#each links as link}
							<HeaderLink href={link.href}>{link.name}</HeaderLink>
						{/each}
					</div>
					<DarkModeToggle />
				</div>
			</div>
			<!-- Mobile menu, show/hide based on menu state. -->
			{#if isMenuOpen}
				<div class="sm:hidden" id="mobile-menu">
					<div class="flex flex-col space-y-1 px-2 pb-6 pt-2">
						{#each links as link}
							<HeaderLink href={link.href}>{link.name}</HeaderLink>
						{/each}
						<DarkModeToggle />
					</div>
				</div>
			{/if}
		</div>
	</nav>
</header>
