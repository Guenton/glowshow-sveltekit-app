<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div
			class="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed meet-hendrik-background"
		>
			<div
				class="flex-1 h-full bg-gradient-to-b from-surface-900 via-surface-900/0 to-surface-900"
			/>
			<div class="h-72 w-full bg-surface-900">
				<slot />
			</div>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex flex-col">
			<!-- Header Section -->
			<div class="h-10 w-full bg-surface-900" />
			<!-- Content Section -->
			<div
				class="flex-1 h-full bg-gradient-to-b from-surface-900 via-surface-900/10 to-surface-900"
			>
				<div class="flex-1 flex h-full">
					<!-- Left Half -->
					<div class="flex-1 bg-surface-900">
						<slot />
					</div>
					<!-- Right Half -->
					<div class="flex-1 flex m-10 bg-cover meet-hendrik-background">
						<div class="flex-1 h-full pr-10 bg-gradient-to-l from-surface-900 to-transparent" />
					</div>
				</div>
			</div>
			<div class="h-10 w-full bg-surface-900" />
		</div>
	</div>
</div>

<style>
	.meet-hendrik-background {
		background-image: url('/img/meetHendrikBackground.jpg');
	}
</style>
