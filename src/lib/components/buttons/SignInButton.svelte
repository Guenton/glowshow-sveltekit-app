<script>
	import { createEventDispatcher } from 'svelte';
	import IconAccount from '~icons/mdi/account';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn btn-sm !bg-transparent text-white" {disabled} on:click={click}>
	<span class="text-primary-500"><IconAccount /></span>
	<span>Sign In</span>
</button>
