<script lang="ts">
	import Icon from '@iconify/svelte';

	import profileImage from '$lib/images/profile.jpg';

	import Button from '../components/common/Button.svelte';

	const title = 'Max Kelly - Software Engineer';
	const description =
		'Portfolio website for Software Engineer Max Kelly. A showcase of my experience and skills.';
</script>

<svelte:head>
	<title>Max Kelly - Software Engineer</title>
	<meta name="description" content={description} />
	<!-- Open Graph Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<div>
	<div id="home" class="grid place-items-center gap-3 sm:gap-9 md:min-h-[85vh] md:grid-cols-2">
		<img
			class="h-48 w-48 rounded-full shadow-2xl sm:h-56 sm:w-56 md:order-last lg:ml-12 lg:h-80 lg:w-80"
			alt="Profile"
			src={profileImage}
		/>
		<div class="flex flex-col items-center justify-center">
			<h1
				class="text-center text-3xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl lg:leading-relaxed"
			>
				Hello, I am <br />Max Kelly
			</h1>
			<h2
				class="text-md mt-2 text-center font-semibold leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg lg:text-xl lg:leading-relaxed"
			>
				Software Engineer
			</h2>
			<p
				class="mt-4 text-center text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300 lg:leading-relaxed"
			>
				A passionate developer that thinks about the small details.
			</p>
			<Button title="Message me">
				<Icon icon="ion:send" height={24} width={24} />
			</Button>
		</div>
	</div>
	<div class="my-72 md:min-h-[85vh]">
		<div id="about" class="grid place-items-center gap-3 sm:gap-9">
			<h1
				class="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl"
			>
				About
			</h1>
			<p
				class="text-md mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
			>
				I am a Software Engineer with a passion for building high quality, scalable and maintainable
				software. I have a keen interest in learning new technologies and applying them to solve
				real world problems.
			</p>
		</div>
		<div class="mt-16 grid grid-cols-3 place-items-center gap-3 text-center sm:gap-9">
			<div class="grid h-28 w-40 place-items-center">
				<h2 class="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">3+</h2>
				<p class="text-sm leading-normal text-zinc-600 dark:text-zinc-300">Years experience</p>
			</div>
			<div class="grid h-28 w-40 place-items-center">
				<h2 class="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">12+</h2>
				<p class="text-sm leading-normal text-zinc-600 dark:text-zinc-300">Languages</p>
			</div>
			<div class="grid h-28 w-40 place-items-center">
				<h2 class="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">20+</h2>
				<p class="text-sm leading-normal text-zinc-600 dark:text-zinc-300">Projects</p>
			</div>
		</div>
		<div class="mt-8 flex flex-1 justify-center">
			<Button title="Download CV">
				<Icon icon="ion:cloud-download" height={24} width={24} />
			</Button>
		</div>
	</div>
	<div class="my-72 md:min-h-[85vh]">
		<h1
			id="experience"
			class="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl"
		>
			Experience
		</h1>
		<p
			class="text-md mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
		>
			Here are some of the companies I have worked for
		</p>
		<ol class="relative mt-16 border-l-4 border-rose-600 dark:border-rose-600">
			<li class="mb-10 ml-4">
				<div
					class="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>September 2018 - June 2022</time
				>
				<p
					class="text-md mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
				>
					University of Dundee
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					BSC (Hons) Computing Science
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					First class honours
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
			<li class="mb-10 ml-4">
				<div
					class="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>September 2020 - September 2021</time
				>

				<p
					class="text-md mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
				>
					Udrafter
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					Student Software Developer
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
			<li class="ml-4">
				<div
					class="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>June 2022 - Present</time
				>
				<p
					class="text-md mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
				>
					The Key Support Services
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					Software Engineer
				</p>
				<p
					class="sm:text-md mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
		</ol>
	</div>
	<div class="my-72 md:min-h-[85vh]">
		<h1
			id="stack"
			class="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl"
		>
			Tech stack
		</h1>
		<p
			class="text-md mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
		>
			Here's what I know
		</p>
	</div>
	<div class="my-72 md:min-h-[85vh]">
		<h1
			id="education"
			class="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl"
		>
			Education
		</h1>
		<p
			class="text-md mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg"
		>
			Here's where I went to school
		</p>
	</div>
	<div class="my-72 md:min-h-[85vh]">
		<h1
			class="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl"
		>
			Contact me
		</h1>
		<form action="#" method="POST" class="mx-auto mt-16 sm:mt-20">
			<div class="grid gap-3 sm:gap-9">
				<div>
					<label
						for="name"
						class="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-300"
						>Name</label
					>
					<div class="mt-2.5">
						<input
							id="name"
							type="text"
							autocomplete="name"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-rose-600 placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						for="email"
						class="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-300"
						>Email</label
					>
					<div class="mt-2.5">
						<input
							id="email"
							type="text"
							autocomplete="email"
							class="text-zinc-900shadow-sm block w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-inset ring-rose-600 placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						for="subtitle"
						class="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-300"
						>Subtitle</label
					>
					<div class="mt-2.5">
						<input
							id="subtitle"
							type="text"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-rose-600 placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						for="message"
						class="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-300"
						>Message</label
					>
					<div class="mt-2.5">
						<textarea
							id="message"
							rows="6"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-rose-600 placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="flex flex-1 justify-center">
					<Button title="Send message">
						<Icon icon="ion:send" height={24} width={24} />
					</Button>
				</div>
			</div>
		</form>
	</div>
</div>
