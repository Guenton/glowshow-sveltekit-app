<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div class="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed xmas-background">
			<div class="h-72 w-full bg-surface-900">
				<slot />
			</div>
			<div
				class="flex-1 h-full bg-gradient-to-b from-surface-900 via-surface-900/0 to-surface-900"
			/>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed xmas-background">
			<div class="h-10 w-full bg-surface-900" />
			<div
				class="flex-1 h-full bg-gradient-to-b from-surface-900 via-surface-900/10 to-surface-900"
			>
				<div class="flex-1 flex h-full">
					<div class="flex-1 bg-gradient-to-r from-surface-900 via-surface-900/10 to-surface-900" />
					<div class="flex-1 bg-surface-900">
						<slot />
					</div>
				</div>
			</div>
			<div class="h-10 w-full bg-surface-900" />
		</div>
	</div>
</div>

<style>
	.xmas-background {
		background-image: url('/xmasBackground.jpg');
	}
</style>
