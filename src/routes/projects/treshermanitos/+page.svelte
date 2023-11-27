<script>
	import { Button, Carousel, Thumbnails, Video } from 'flowbite-svelte';
	import GitHub from '../../../icons/gitHub.svelte';
</script>

<div class="container w-full mx-auto mt-10">
	<div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">
		<Video
			src="/v1.mp4"
			controls
			class="rounded-xl order-2 lg:order-1 lg:w-1/2 space-y-4"
			trackSrc="flowbite.mp4"
		/>

		<div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center">
			<h1 class=" dark:text-amber-700 w-full text-xl text-center font-bold">
				Ecommerce Tres Hermanitos | Fullstack Developer
			</h1>
			<p class="dark:text-white w-full text-lg lg:text-xl">
				This application is an ecommerce oriented to the sale of all types of sweets, The e-commerce
				platform employs a microservices and microfrontends architecture, leveraging leading
				technologies such as <span class="text-amber-700 font-semibold"
					>Java, Spring, Spring Boot, Spring Cloud, Spring Security, Eureka, Spring Gateway, NestJs,
					JWT, OAuth2, OpenAPI, Cloudinary, React, TailwindCSS, Svelte, Nginx, GIT, and Docker.</span
				> The Docker container implementation ensures portability and efficiency in deployment.
			</p>
			<p class="dark:text-white w-full text-lg mb-4">You can see the home of the store</p>

			<Button target="_blank" href="https://github.com/franBarrientos/BackJava-Ecoomerce-Microservices" outline
				><span class="mr-2">Source</span><GitHub /></Button
			>
		</div>
	</div>
	<div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">
		<Video
			src="/v2.mp4"
			controls
			class="rounded-xl order-2 lg:order-2 lg:w-1/2 space-y-4"
			trackSrc="flowbite.mp4"
		/>

		<div class="w-full lg:w-1/2 order-1 lg:order-1 flex flex-col p-5 justify-center items-center">
			<h1 class="dark:text-white w-full text-xl text-center font-bold">Login and Authentication</h1>
			<p class="dark:text-white w-full text-lg lg:text-xl">
				You dive into a login form that connects to our authentication microservice API or using
				OAuth2, making use of Google's API. Strong validation, encryption with algorithms, and a JWT
				token in the headers pave the way for role-based access control. Either as a client or
				administrator.
			</p>
			<p class="dark:text-white w-full text-lg">Below you can see the login of the store</p>
		</div>
	</div>
	<div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">
		<Video
			src="/v3.mp4"
			controls
			class="rounded-xl order-2 lg:order-1 lg:w-1/2 space-y-4"
			trackSrc="flowbite.mp4"
		/>

		<div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center">
			<h1 class=" dark:text-amber-700 w-full text-xl text-center font-bold">
				Integration with online payment gateway
			</h1>
			<p class="dark:text-white w-full text-lg lg:text-xl">
				Here you can see the integration with the Mercado Pago API, which is an online payment
				platform, and then you can see the purchase history of each client..
			</p>
			<p class="dark:text-white w-full text-lg">You can see the home of the store</p>
		</div>
	</div>
	<div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">
		<Video
			src="/v4.mp4"
			controls
			class="rounded-xl order-2 lg:order-2 lg:w-1/2 space-y-4"
			trackSrc="flowbite.mp4"
		/>

		<div class="w-full lg:w-1/2 order-1 lg:order-1 flex flex-col p-5 justify-center items-center">
			<h1 class="dark:text-white w-full text-xl text-center font-bold">
				Administration dashboard and Microfrontend (Svelte & React)
			</h1>
			<p class="dark:text-white w-full text-lg lg:text-xl">
				You can see the administration panel, in which administrators, with this role, have
				permission to edit each part of the system. This was built as a microfrontend since the
				beginning section was built with React and the section at the end (with purple hue) was
				built with svelte, and in turn these are containers that are orchestrated with docker, and
				managed by a gateway through a server NGINX.
			</p>
			<p class="dark:text-white w-full text-lg mb-5">You can see the administration dashboard</p>
			<Button href="https://github.com/franBarrientos/BackJava-Ecoomerce-Microservices" outline
			><span class="mr-2">Source</span><GitHub /></Button
		>
		</div>
	</div>

</div>
