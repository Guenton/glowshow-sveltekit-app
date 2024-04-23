<script>
	import { createEventDispatcher } from 'svelte';
	import IconCheckAll from '~icons/mdi/check-all';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn btn-sm !bg-transparent text-white" {disabled} on:click={click}>
	<span class="text-primary-500"><IconCheckAll /></span>
	<span>Orders</span>
</button>
