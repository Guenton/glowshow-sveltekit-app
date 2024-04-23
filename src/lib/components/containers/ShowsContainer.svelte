<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed shows-background">
			<div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/50 to-surface-900"
			>
				<slot />
			</div>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed shows-background">
			<div
				class="flex-1 flex h-full bg bg-gradient-to-b from-surface-900 via-surface-900/50 to-surface-900"
			>
				<div class="flex-1 bg-gradient-to-r from-surface-900 via-surface-900/0 to-surface-900/5">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.shows-background {
		background-image: url('/showsBackground.jpg');
	}
</style>
