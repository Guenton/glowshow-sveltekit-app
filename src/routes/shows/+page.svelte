<script>
	import { goto } from '$app/navigation';
	import HomeButton from '$lib/components/buttons/HomeButton.svelte';
	import LetsTalkButton from '$lib/components/buttons/LetsTalkButton.svelte';
	import ErrorContainer from '$lib/components/containers/ErrorContainer.svelte';
	import ShowsContainer from '$lib/components/containers/ShowsContainer.svelte';
	import AppBar from '$lib/components/content/AppBar.svelte';
</script>

<AppBar />
<ShowsContainer>
	<div class="m-10 md:m-32">
		<div class="text-white">
			<h1 class="h1">Organizing events?</h1>
			<h1 class="h1">Want them to be special?</h1>
			<h1 class="h1">Lets partner up!</h1>
		</div>
		<div class="mt-5">
			<LetsTalkButton on:click={() => goto('/contact')} />
		</div>
	</div>
</ShowsContainer>
