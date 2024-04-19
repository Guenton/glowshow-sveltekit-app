<script>
</script>

<div class="h-full">
	<!-- Small Screen -->
	<div class="block md:hidden h-screen">
		<slot />
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed login-background">
			<div
				class="flex-1 bg-gradient-to-r
				 from-alchemy-secondary/40 via-alchemy-surface-light/80 to-alchemy-surface-light/100
				 dark:from-alchemy-secondary/40 dark:via-alchemy-surface-dark/80 dark:to-alchemy-surface-dark/100"
			/>

			<div class="flex-1 h-full bg-surface-100 dark:bg-surface-900">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.login-background {
		background-image: url('/background.jpg');
	}
</style>
