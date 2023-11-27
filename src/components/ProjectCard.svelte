<script lang="ts">
	import { Avatar } from 'flowbite-svelte';

	export let avatarImg: string;
	export let principalText: string;
	export let secondaryText: string;
	export let thirdText: string;
</script>

<div
	class="bg-white rounded-lg p-2 w-full border dark:border-none
                 dark:bg-gray-900 h-28 lg:h-24 flex items-center justify-around "
>
	<img class="h-20 rounded-sm" src={avatarImg} alt={principalText} />
	<div class="flex-1 mt-4 ml-3 w-12 break-words  flex flex-col justify-center items-center ">
		<p class="text-md lg:text-lg font-light lg:font-medium text-gray-900 dark:text-white dark:hover:text-blue-500 hover:text-blue-500">
			{principalText}
		</p>
		<p class="text-center text-sm lg:text-base mb-2 w-full  text-gray-500 truncate dark:text-gray-400">
			{thirdText}
		</p>
		<p class="text-center text-sm lg:text-base mb-2 w-full text-gray-500 truncate dark:text-gray-400 ">
			{secondaryText}
		</p>
	</div>
</div>
