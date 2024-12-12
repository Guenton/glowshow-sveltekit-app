<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed inspire-background">
			<div class="flex-1 h-full bg-gradient-to-b from-surface-900 via-surface-900/5 to-surface-900">
				<slot />
			</div>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed inspire-background">
			<div class="h-10 w-full bg-surface-900"></div>
			<div
				class="flex-1 flex h-full bg-gradient-to-b from-surface-900 via-surface-900/5 to-surface-900"
			>
				<div class="h-full w-32 bg-gradient-to-r from-surface-900 to-surface-900/5"></div>
				<div class="flex-1">
					<slot />
				</div>
				<div class="h-full w-32 bg-gradient-to-l from-surface-900 to-surface-900/5"></div>
			</div>
			<div class="h-10 w-full bg-surface-900"></div>
		</div>
	</div>
</div>

<style>
	.inspire-background {
		background-image: url('/img/inspireBackground.jpg');
	}
</style>
