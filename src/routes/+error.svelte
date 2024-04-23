<script lang="ts">
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/buttons/HomeButton.svelte';
	import HomeContainer from '$lib/components/containers/HomeContainer.svelte';

	import AppBar from '$lib/components/content/AppBar.svelte';
	import FlatAlert from '$lib/components/content/FlatAlert.svelte';
	import { alertTextState, alertTypeState } from '$lib/store';

	let errorMessage = $page.error?.message ?? '';

	$: errorMessage && alertTextState.set(errorMessage);
	$: errorMessage && alertTypeState.set('error');
</script>

<HomeContainer>
	<AppBar />
	<div class="m-10 md:m-32">
		<div class="text-white">
			<h1 class="h1">Oops... something went wrong</h1>
			<h1 class="h1">please try again</h1>
			<h1 class="h1">or let us know what happened</h1>
		</div>
		<div class="mt-5">
			<HomeButton />
		</div>
	</div>
	<FlatAlert />
</HomeContainer>
