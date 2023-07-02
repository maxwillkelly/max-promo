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

<div class="p-12 sm:p-16 md:p-28 lg:p-32">
	<div class="grid gap-3 sm:gap-9 place-items-center md:grid-cols-2">
		<img
			class="h-48 w-48 sm:h-56 sm:w-56 lg:h-80 lg:w-80 shadow-2xl lg:ml-12 rounded-full md:order-last"
			alt="Profile"
			src={profileImage}
		/>
		<div class="flex flex-col items-center justify-center">
			<h1
				class="text-3xl sm:text-4xl lg:text-5xl text-center leading-normal lg:leading-relaxed font-semibold text-zinc-900 dark:text-zinc-100"
			>
				Hello, I am <br />Max Kelly
			</h1>
			<h2
				class="text-md sm:text-lg lg:text-xl text-center leading-normal lg:leading-relaxed font-semibold text-zinc-600 dark:text-zinc-300 mt-2"
			>
				Software Engineer
			</h2>
			<p
				class="text-sm text-center leading-normal lg:leading-relaxed font-medium text-zinc-600 dark:text-zinc-300 mt-4"
			>
				A passionate developer that thinks about the small details.
			</p>
			<Button title="Message me">
				<Icon icon="ion:send" height={24} width={24} />
			</Button>
		</div>
	</div>
	<div class="my-72">
		<div class="grid gap-3 sm:gap-9 place-items-center">
			<h1
				class="text-2xl sm:text-3xl lg:text-4xl text-center leading-normal font-semibold text-zinc-900 dark:text-zinc-100"
			>
				About
			</h1>
			<p
				class="text-md sm:text-lg text-center leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
			>
				I am a Software Engineer with a passion for building high quality, scalable and maintainable
				software. I have a keen interest in learning new technologies and applying them to solve
				real world problems.
			</p>
		</div>
		<div class="grid gap-3 sm:gap-9 grid-cols-3 place-items-center mt-16 text-center">
			<div class="grid place-items-center w-40 h-28">
				<h2 class="text-5xl text-zinc-900 dark:text-zinc-100 leading-normal">3+</h2>
				<p class="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">Years experience</p>
			</div>
			<div class="grid place-items-center w-40 h-28">
				<h2 class="text-5xl text-zinc-900 dark:text-zinc-100 leading-normal">12+</h2>
				<p class="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">Languages</p>
			</div>
			<div class="grid place-items-center w-40 h-28">
				<h2 class="text-5xl text-zinc-900 dark:text-zinc-100 leading-normal">20+</h2>
				<p class="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">Projects</p>
			</div>
		</div>
		<div class="flex flex-1 justify-center mt-8">
			<Button title="Download CV">
				<Icon icon="ion:cloud-download" height={24} width={24} />
			</Button>
		</div>
	</div>
	<div class="my-72">
		<h1
			class="text-2xl sm:text-3xl lg:text-4xl text-center leading-normal font-semibold text-zinc-900 dark:text-zinc-100"
		>
			Experience
		</h1>
		<p
			class="text-md sm:text-lg text-center leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
		>
			Here are some of the companies I have worked for.
		</p>
		<ol class="relative border-l-4 border-rose-600 dark:border-rose-600 mt-16">
			<li class="mb-10 ml-4">
				<div
					class="absolute w-6 h-6 rounded-full -left-3.5 border dark:border-rose-900 bg-rose-600 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2018 - June 2022</time>
				<p
					class="text-md sm:text-lg leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					University of Dundee
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					BSC (Hons) Computing Science
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					First class honours
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
			<li class="mb-10 ml-4">
				<div
					class="absolute w-6 h-6 rounded-full -left-3.5 border dark:border-rose-900 bg-rose-600 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020 - September 2021</time>

				<p
					class="text-md sm:text-lg leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Udrafter
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Student Software Developer
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
			<li class="ml-4">
				<div
					class="absolute w-6 h-6 rounded-full -left-3.5 border dark:border-rose-900 bg-rose-600 dark:bg-rose-600"
				/>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022 - Present</time>
				<p
					class="text-md sm:text-lg leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					The Key Support Services
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Software Engineer
				</p>
				<p
					class="text-sm sm:text-md leading-normal font-medium text-zinc-600 dark:text-zinc-300 mt-2"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor corrupti placeat ipsam
					nobis nemo magni enim veritatis, delectus quam? Dolorem amet obcaecati nulla porro labore.
					Rem eos quae provident?
				</p>
			</li>
		</ol>
	</div>
	<div class="my-72">
		<div class="grid gap-3 sm:gap-9 place-items-center md:grid-cols-2">
			<h1
				class="text-2xl sm:text-3xl lg:text-4xl text-center leading-normal font-semibold text-zinc-900 dark:text-zinc-100"
			>
				Contact me
			</h1>
			<div class="grid gap-3 sm:gap-9">
				<div>
					<label for="name" class="text-zinc-600 dark:text-zinc-300">Name</label>
					<input id="name" type="text" placeholder="Name" class="w-full rounded-md p-2" />
				</div>
				<div>
					<label for="email" class="text-zinc-600 dark:text-zinc-300">Email</label>
					<input id="email" type="text" placeholder="Name" class="w-full rounded-md p-2" />
				</div>
				<div>
					<label for="subtitle" class="text-zinc-600 dark:text-zinc-300">Subtitle</label>
					<input id="subtitle" type="text" placeholder="Name" class="w-full rounded-md p-2" />
				</div>
				<div>
					<label for="message" class="text-zinc-600 dark:text-zinc-300">Message</label>
					<textarea id="message" rows="6" placeholder="Message" class="w-full rounded-md p-2" />
				</div>
				<div>
					<Button title="Send message">
						<Icon icon="ion:send" height={24} width={24} />
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
