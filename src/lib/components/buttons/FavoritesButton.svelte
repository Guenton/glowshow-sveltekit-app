<script>
	import { createEventDispatcher } from 'svelte';
	import IconStar from '~icons/mdi/star';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn btn-sm !bg-transparent text-white" {disabled} on:click={click}>
	<span class="text-primary-500"><IconStar /></span>
	<span>Favorites</span>
</button>
