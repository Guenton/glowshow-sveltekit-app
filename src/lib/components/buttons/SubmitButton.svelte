<script>
	import { createEventDispatcher } from 'svelte';
	import IconArrowRightThin from '~icons/mdi/arrow-right-thin';

	export let disabled = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button class="btn variant-filled-primary px-8" {disabled} on:click={click}>
	<span>Submit</span>
	<span><IconArrowRightThin /></span>
</button>
