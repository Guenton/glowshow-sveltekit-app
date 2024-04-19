<script lang="ts">
	import GetInspiredButton from '$lib/components/buttons/GetInspiredButton.svelte';
	import HomeContainer from '$lib/components/containers/HomeContainer.svelte';
	import AppBar from '$lib/components/content/AppBar.svelte';

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
