<script>
	import { goto } from '$app/navigation';
	import LetsTalkButton from '$lib/components/buttons/LetsTalkButton.svelte';
	import BarSignContainer from '$lib/components/containers/BarSignContainer.svelte';
	import ShowsContainer from '$lib/components/containers/ShowsContainer.svelte';
	import ChristmasContainer from '$lib/components/containers/ChristmasContainer.svelte';
	import AppBar from '$lib/components/content/AppBar.svelte';
	import ShowMeButton from '$lib/components/buttons/ShowMeButton.svelte';
</script>

<div class="w-full fixed">
	<AppBar />
</div>
<ShowsContainer>
	<div class="m-10 mt-32 md:m-32">
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
<BarSignContainer>
	<div class="m-10 mt-24 md:m-32">
		<div class="text-white">
			<h1 class="h1">Would you like</h1>
			<h1 class="h1">to see our</h1>
			<h1 class="h1 hidden md:block">Christmas</h1>
			<h1 class="h1 hidden md:block">collection?</h1>
			<h1 class="h1 block md:hidden">Christmas collection?</h1>
		</div>
		<div class="mt-5">
			<LetsTalkButton on:click={() => goto('/contact')} />
		</div>
	</div>
</BarSignContainer>
<ChristmasContainer>
	<div class="m-10 mt-32 md:m-32">
		<div class="text-white">
			<h1 class="h1">Is it beginning to look</h1>
			<h1 class="h1">a lot like Christmas?</h1>
			<h1 class="h1">See our season catalog.</h1>
		</div>
		<div class="mt-5">
			<ShowMeButton />
		</div>
	</div>
</ChristmasContainer>
