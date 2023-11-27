<script>
	import { Button, Carousel, Thumbnails, Video } from 'flowbite-svelte';
	import GitHub from '../../../icons/gitHub.svelte';
	let index = 0;
	let forward = true;

	const images = [
		{
			alt: 'Cosmic timetraveler',
			src: '/work21.PNG',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cristina Gottardi',
			src: '/work22.png',
			title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		},
		{
			alt: 'Cristina Gottardi',
			src: '/work23.png',
			title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		}
	];
</script>

<div class="container w-full mx-auto mt-10">
	<div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">
		<div class="max-w-4xl space-y-4">
			<Carousel {images} transition={null} {forward} let:Indicators let:Controls bind:index>
				<Controls />
				<Indicators />
			</Carousel>
			<Thumbnails {images} {forward} bind:index />
		</div>

		<div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center">
			<h1 class=" dark:text-amber-700 w-full text-xl text-center font-bold">
				Kiosko Fresh Coffe | Fullstack Developer
			</h1>
			<p class="dark:text-white w-full text-lg lg:text-xl">
				This application is a coffee shop, where customers can register, order, and then receive that order. Through an administration panel, these products can be shipped, the kiosk employs a client/server architecture. The
				Client is built with <span class="text-amber-700 font-semibold">
					React, TailwindCSS and the Backend with Typescript, NodeJS, MySql</span
				>, Have authentication with JWT and login with Google
			</p>

            <div class="flex justify-center gap-5 mt-5">
                <Button
				target="_blank"
				href="https://github.com/franBarrientos/FreshKioskoFront"
				outline><span class="mr-2">Client Source </span><GitHub /></Button
			>

			<Button
				target="_blank"
				href="https://github.com/franBarrientos/FreshKioskoBackend"
				outline><span class="mr-2">Back Source </span><GitHub /></Button
			>
            </div>
		
		</div>
	</div>
</div>
