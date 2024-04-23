<script>
	import { goto } from '$app/navigation';
	import HomeButton from '$lib/components/buttons/HomeButton.svelte';
	import ErrorContainer from '$lib/components/containers/ErrorContainer.svelte';
	import AppBar from '$lib/components/content/AppBar.svelte';
</script>

<ErrorContainer>
	<AppBar />
	<div class="m-10 md:m-32">
		<div class="text-white">
			<h1 class="h1">This Page is still under construction</h1>
			<h1 class="h1">thank you for your patience</h1>
			<h1 class="h1">our journey will continue soon!</h1>
		</div>
		<div class="mt-5">
			<HomeButton on:click={() => goto('/')} />
		</div>
	</div>
</ErrorContainer>
