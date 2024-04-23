<script lang="ts">
	import GetInspiredButton from '$lib/components/buttons/GetInspiredButton.svelte';
	import MeetUsButton from '$lib/components/buttons/MeetUsButton.svelte';
	import ShowMeButton from '$lib/components/buttons/ShowMeButton.svelte';
	import HomeContainer from '$lib/components/containers/HomeContainer.svelte';
	import InspireContainer from '$lib/components/containers/InspireContainer.svelte';
	import MeetUsContainer from '$lib/components/containers/MeetUsContainer.svelte';
	import XmasContainer from '$lib/components/containers/XmasContainer.svelte';
	import AppBar from '$lib/components/content/AppBar.svelte';
	import GuenTonBar from '$lib/components/content/GuenTonBar.svelte';

	import { policyPage } from '$utils/pages';
</script>

<HomeContainer>
	<AppBar />
	<div class="m-10 md:m-32">
		<div class="text-white">
			<h1 class="h1">Handcrafted light animations</h1>
			<h1 class="h1">built with passion to</h1>
			<h1 class="h1">suit your needs</h1>
		</div>
		<div class="mt-5">
			<GetInspiredButton />
		</div>
	</div>
</HomeContainer>
<InspireContainer>
	<div class="m-10 md:ml-0 md:mt-32">
		<div class="text-white">
			<h1 class="h1">How can we</h1>
			<h1 class="h1">inspire you</h1>
			<h1 class="h1">today?</h1>
		</div>
	</div>
</InspireContainer>
<XmasContainer>
	<div class="m-10 md:m-32">
		<div class="text-white">
			<h1 class="h1">Would you like</h1>
			<h1 class="h1">to see our</h1>
			<h1 class="h1 hidden md:block">Christmas</h1>
			<h1 class="h1 hidden md:block">collection?</h1>
			<h1 class="h1 block md:hidden">Christmas collection?</h1>
		</div>
		<div class="mt-5">
			<ShowMeButton />
		</div>
	</div>
</XmasContainer>
<MeetUsContainer>
	<div class="m-10 md:ml-0 md:mt-32">
		<div class="text-white">
			<h1 class="h1">Would you like</h1>
			<h1 class="h1">to know who</h1>
			<h1 class="h1">we are?</h1>
		</div>
		<div class="mt-5">
			<MeetUsButton />
		</div>
	</div>
</MeetUsContainer>
<GuenTonBar />
