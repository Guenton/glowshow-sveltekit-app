<script>
	import { createEventDispatcher } from 'svelte';
	import IconArrowRightLong from '~icons/fa6-solid/arrow-right-long';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn variant-filled-primary px-10" {disabled} on:click={click}>
	<span>Get Inspired</span>
	<span><IconArrowRightLong /></span>
</button>
