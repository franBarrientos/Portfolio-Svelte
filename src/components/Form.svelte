<script context="module">
	import { Label, Input, ButtonGroup, Button } from 'flowbite-svelte';
	import Envelope from '../icons/envelope.svelte';
</script>

		<form class="mt-4 flex flex-col" method="POST" name="contact" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
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
