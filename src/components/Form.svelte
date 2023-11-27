<script>
	import { Label, Input, ButtonGroup } from 'flowbite-svelte';
	import Envelope from '../icons/envelope.svelte';
</script>

<div class="mb-3">
	<Label for="name" class="block mb-2">Name</Label>
	<Input required id="name" placeholder="Your Name" />
</div>
<div class="mb-3">
	<Label for="email" class="block mb-2">Your Email</Label>
	<Input  required id="email" type="email" placeholder="name@flowbite.com">
		<Envelope slot="left"  width="w-5" heigth="h-5" />
	</Input>
</div>

<div class="mb-3">
	<Label for="email" class="block mb-2">Your Message</Label>
	<Input required id="email" type="text" placeholder="Hi Fran !!"></Input>
</div>
