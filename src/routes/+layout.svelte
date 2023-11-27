<script>
	import { onMount } from 'svelte';
	import '../app.pcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DarkMode,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		Avatar
	} from 'flowbite-svelte';
	import GitHub from '../icons/gitHub.svelte';
	import { page } from '$app/stores';
	import Linkedin from '../icons/linkedin.svelte';
	import Instagram from '../icons/instagram.svelte';
	let theme = 'light';

	const toggleTheme = () => {
		theme = localStorage.getItem('color-theme') ?? 'light';
	};
	onMount(() => {
		toggleTheme();
	});
    export const prerender = true;

</script>

<main class="bg-white dark:bg-gray-950 min-h-screen flex justify-between flex-col">
	<Navbar class="bg-[#f1f9f5] p-4" rounded>
		<NavBrand href="/">
			<img
				src={theme == 'light' ? '/F2.png' : '/F1.png'}
				class="mr-3 h-12 w-12 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Fran Barrientos</span
			>
		</NavBrand>
		<NavHamburger />
        <button on:click={toggleTheme}>
            <DarkMode class="px-0 py-2 ml-5" size="lg" />
        </button>
		<NavUl ulClass="flex  p-4 justify-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" activeUrl={$page.url.pathname}>
			<NavLi class="mr-2"  href="https://www.linkedin.com/in/franco-barrientos/?locale=en_US"
				><Instagram width={40} heigth={40} /></NavLi
			>
			<NavLi href="https://www.linkedin.com/in/franco-barrientos/?locale=en_US"
				><Linkedin width="w-16" heigth="h-12" /></NavLi
			>
			<NavLi  href="https://github.com/franBarrientos"><GitHub width="w-10" heigth="h-10" /></NavLi>
		
		</NavUl>
	</Navbar>

	<!-- 	<Navbar class="bg-[#f1f9f5] p-4" rounded>
		<NavBrand href="/">
			<img
				src={theme == 'light' ? '/F2.png' : '/F1.png'}
				class="mr-3 h-12 w-12 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Fran Barrientos</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl
			ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
		>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="https://github.com/franBarrientos"><GitHub width="w-10" heigth="h-10" /></NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
		<button on:click={toggleTheme}>
			<DarkMode class="px-0 py-2" />
		</button>
	</Navbar> -->

	<slot />

	<Footer footerType="logo" class=" mt-10 p-4 bg-[#f1f9f5]">
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterBrand
				href="/"
				src={theme == 'light' ? '/F2.png' : '/F1.png'}
				alt="Logo"
				name="Franco Barrientos"
			/>
			<FooterLinkGroup
				ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
			>
			</FooterLinkGroup>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="Franco Barrientos" />
	</Footer>
</main>
