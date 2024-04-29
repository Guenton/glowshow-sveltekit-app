<script>
	let srcLight = '/img/logoLight.png';
	let srcDark = '/img/logoDark.png';
</script>

<div class="block dark:hidden">
	<img src={srcLight} height="40" width="200" alt="GlowShow Logo" />
</div>

<div class="hidden dark:block">
	<img src={srcDark} height="40" width="200" alt="GlowShow Logo" />
</div>
