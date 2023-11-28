<script>
	import { Button, Label, Input, ButtonGroup } from 'flowbite-svelte';
	import Card from '../components/Card.svelte';
	import Form from '../components/Form.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import Download from '../icons/download.svelte';
	import Envelope from '../icons/envelope.svelte';
	export const prerender = true;
</script>

<input type="hidden" name="form-name" value="contact" />

<div class="container mx-auto p-2 flex flex-col justify-center items-center">
	<div class="flex flex-col lg:flex-row justify-around w-full gap-2 my-5">
		<div
			class="bg-white rounded-lg px-2 w-full flex justify-around items-center dark:text-white dark:bg-gray-900 h-14 mt-7"
		>
			<div class=" flex gap-2 items-center justify-center">
				<img src="myFace.jpg" class="h-20 rounded-full" alt="my face" />
				<div class="flex flex-col">
					<span class="text-xl font-bold">Franco Barrientos</span>
					<span class="text-xl font-light">Backend Developer</span>
				</div>
			</div>
			<div class="cursor-pointer hover:text-blue-500 flex items-center gap-2">
				<span class="text-lg mt-1">CV</span><Download />
			</div>
		</div>
		<div class="w-full flex mt-4 lg:mt-0 flex-col justify-center items-center">
			<h1 class="dark:text-white text-xl font-bold">Education</h1>
			<Card
				avatarImg="unne.png"
				principalText="UNNE | Information Systems Bachelor Degree"
				secondaryText="2022 - 2026 (expected)"
			/>
			<a href="java.pdf" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>
				<Card
					avatarImg="folcode.jpg"
					principalText="Folcademy | Java Backend Developer"
					secondaryText="2023 "
				/>
			</a>
		</div>
	</div>

	<div class="w-full flex flex-col lg:flex-row gap-4">
		<div class="w-full flex mt-4 order-2 lg:order-1 lg:-mt-20 flex-col justify-start items-center">
			<h1 class="dark:text-white text-xl font-bold">Featured Projects & Experience</h1>
			<a href="/projects/treshermanitos" class="cursor-pointer w-full mt-5 hover:text-blue-500">
				<ProjectCard
					avatarImg="work1.png"
					principalText="Ecommerce Tres Hermanitos | Frelancer"
					thirdText="Ecommerce based on Microservices and Microfrontends"
					secondaryText="Java, Spring Boot, Spring Cloud, Docker, React, NestJS, Cloud and more "
				/>
			</a>
			<a href="/projects/freshcoffe" class="cursor-pointer w-full mt-5 hover:text-blue-500">
				<ProjectCard
					avatarImg="work22.png"
					principalText="Fresh Kiosko | Frelancer"
					thirdText=" Coffee shop, where customers can register, order, and then receive that order"
					secondaryText="React, TailwindCSS and the Backend with Typescript, NodeJS, MySql and more "
				/>
			</a>
		</div>
		<div class="w-full flex mt-4 order-1 lg:order-2 lg:mt-0 flex-col justify-center items-center">
			<h1 class="dark:text-white text-xl p-0 m-0 font-bold">Certifications</h1>
			<a
				href="https://www.udemy.com/certificate/UC-31083050-6269-496c-9af6-815de808386a/"
				target="_blank"
				class="cursor-pointer w-full mt-5 hover:text-blue-500"
			>
				<Card
					avatarImg="udemy.png"
					principalText="Microservices | APIs Rest with Spring Boot | Docker"
					secondaryText="2023 "
				/>
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-b5af4abc-d335-413a-9c15-4973c1474234/"
				target="_blank"
				class="cursor-pointer w-full mt-5 hover:text-blue-500"
				download
			>
				<Card avatarImg="udemy.png" principalText="Node Expert" secondaryText="2023 " />
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-c3ec55c4-9ab9-4582-9c24-b9203dd65d99/"
				target="_blank"
				class="cursor-pointer w-full mt-5 hover:text-blue-500"
				download
			>
				<Card
					avatarImg="udemy.png"
					principalText="Design Patterns in Typescript and Javascript"
					secondaryText="2023 "
				/>
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-892d0d8c-52aa-4704-adbb-194914670bb1/"
				target="_blank"
				class="cursor-pointer w-full mt-5 hover:text-blue-500"
				download
			>
				<Card
					avatarImg="udemy.png"
					principalText="Laravel 9 - Buil Apps with Laravel and PHP | MVC"
					secondaryText="2023 "
				/>
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-bb2bdbbf-f2a2-458e-95d6-9293ac9fbcae/"
				target="_blank"
				class="cursor-pointer w-full mt-5 hover:text-blue-500"
				download
			>
				<Card
					avatarImg="udemy.png"
					principalText="Web Delopment with HTML, CSS3, JS, PHP, MYSQL"
					secondaryText="2023 "
				/>
			</a>
		</div>
	</div>

	<input type="hidden" name="contact" value="contact" />


	<div
		class="w-full flex mt-4 order-1 lg:order-2 lg:mt-0 flex-col lg:flex-row justify-center items-center"
	>
		<div class="lg:w-1/2 w-full px-5 flex flex-col mt-4 order-2 lg:order-1 lg:-mt-64">
			<h1 class="dark:text-white text-xl font-bold text-center">Contact</h1>
			
			<form class="mt-4 flex flex-col"  name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
				<div class="mb-3">
					<Label for="name" class="block mb-2">Name</Label>
					<Input  required id="name" name="name" placeholder="Your Name" />
				</div>
				<div class="mb-3">
					<Label for="email" class="block mb-2">Your Email</Label>
					<Input required id="email" name="email"  type="email" placeholder="name@flowbite.com">
						<Envelope slot="left" width="w-5" heigth="h-5" />
					</Input>
				</div>

				<div class="mb-3">
					<Label for="msj" class="block mb-2">Your Message</Label>
					<Input required id="msj" name="msj"  type="text" placeholder="Hi Fran !!"></Input>
				</div>
				<Button type="submit" size="sm"
					><Envelope width="w-3" heigth="h-3" /><span class="ml-2">Send messagge</span></Button
				>
			</form>
		</div>
		<div class="lg:w-1/2 lg:order-1"></div>
	</div>

	<!-- ... -->
</div>
