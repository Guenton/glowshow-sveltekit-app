<script>
	import { createEventDispatcher } from 'svelte';
	import IconCheckDouble from '~icons/mdi/check-all';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn btn-icon btn-icon-sm !bg-transparent" {disabled} on:click={click}>
	<span class="text-primary-500"><IconCheckDouble /></span>
</button>
