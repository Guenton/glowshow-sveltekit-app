<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import FlatAlert from '$lib/components/content/FlatAlert.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import Logo from '$lib/components/images/Logo.svelte';

	export let label: string;
</script>

<div class="grid grid-cols-1 gap-10 justify-items-center p-10">
	<div class="flex flex-col items-center w-full">
		<div class="flex self-end justify-end items-center">
			<p class="text-sm mr-1 block dark:hidden">Dark Mode</p>
			<p class="text-sm mr-1 hidden dark:block">Light Mode</p>
			<LightSwitch ring="border-none" fillDark="fill-primary-500" />
		</div>
		<div class="my-20 px-10">
			<Logo />
		</div>
		<SurfaceHeader {label} />
	</div>

	<slot />

	<FlatAlert />
</div>
