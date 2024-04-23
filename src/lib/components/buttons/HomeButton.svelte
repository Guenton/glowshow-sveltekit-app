<script>
	import { createEventDispatcher } from 'svelte';
	import IconHome from '~icons/mdi/home';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn variant-filled-primary px-8" {disabled} on:click={click}>
	<span>Home</span>
	<span><IconHome /></span>
</button>
