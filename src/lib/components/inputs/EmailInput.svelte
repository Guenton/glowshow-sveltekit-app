<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconAt from '~icons/mdi/at';

	export let value: string = '';
	export let ref: HTMLInputElement;

	const dispatch = createEventDispatcher();
	const enter = () => dispatch('enter');
</script>

<div
	class="input-group input-group-divider border-none grid-cols-[auto_1fr_auto] max-w-xl dark:bg-surface-400/50 shadow"
>
	<div class="input-group-shim dark:text-primary-500 dark:bg-surface-700"><IconAt /></div>
	<input
		class="input border-none rounded-none py-3 placeholder-surface-200 dark:bg-gradient-to-r dark:from-surface-700 dark:to-surface-400/50"
		type="email"
		name="email"
		autocomplete="email"
		placeholder="Email"
		bind:value
		on:keyup={(event) => event.key === 'Enter' && enter()}
		bind:this={ref}
	/>
</div>
