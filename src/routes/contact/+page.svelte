<script>
	import { goto } from '$app/navigation';
	import LetsTalkButton from '$lib/components/buttons/LetsTalkButton.svelte';
	import MeetGuentonContainer from '$lib/components/containers/MeetGuentonContainer.svelte';
	import MeetHendrikContainer from '$lib/components/containers/MeetHendrikContainer.svelte';
	import ContactBar from '$lib/components/content/ContactBar.svelte';
</script>

<MeetHendrikContainer>
	<div class="m-10 mt-32 md:m-32">
		<div class="text-white">
			<h1 class="h1">Hendrik Kroon</h1>
			<h4 class="h4">Founder - CEO</h4>
			<br />
			<p class="text-sm">Proud nerd, believes that a problem</p>
			<p class="text-sm">that cannot be solved, hasn't been invented yet</p>
			<p class="text-sm">Father of two, family man, loves classic rock.</p>
		</div>
		<div class="mt-5">
			<LetsTalkButton on:click={() => goto('/contact/request')} />
		</div>
	</div>
</MeetHendrikContainer>
<MeetGuentonContainer>
	<div class="m-10 mt-24 md:m-32">
		<div class="text-white">
			<h1 class="h1">Guenton Brooks</h1>
			<h4 class="h4">Founder - COO</h4>
			<br />
			<p class="text-sm">Creative mind, believes in personalization,</p>
			<p class="text-sm">all solutions should be special and unique</p>
			<p class="text-sm">Gamer, fitness addict, salsa dancer</p>
		</div>
		<div class="mt-5">
			<LetsTalkButton on:click={() => goto('/contact/request')} />
		</div>
	</div>
</MeetGuentonContainer>
