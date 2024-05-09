<script>
	import AppBar from '$lib/components/content/AppBar.svelte';
	import ContactBar from '$lib/components/content/ContactBar.svelte';
</script>

<div class="w-full fixed">
	<AppBar />
</div>

<slot />

<ContactBar />
