<script>
	let srcLight = '/logoLight.png';
	let srcDark = '/logoDark.png';
</script>

<div class="block dark:hidden">
	<img src={srcLight} alt="Alchemy Banking App Logo" />
</div>

<div class="hidden dark:block">
	<img src={srcDark} alt="Alchemy Banking App Logo" />
</div>
