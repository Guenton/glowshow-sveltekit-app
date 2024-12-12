<script>
</script>

<div class="h-screen">
	<!-- Small Screen -->
	<div class="block md:hidden">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed">
			<video
				autoplay
				loop
				muted
				playsinline
				disablepictureinpicture
				class="absolute w-full h-full object-cover -z-10 pr-5 pb-6"
			>
				<source src="/vid/glowshowBackgroundMobile.mp4" type="video/mp4" />
			</video>

			<div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/30 to-surface-900"
			>
				<slot />
			</div>
		</div>
	</div>

	<!-- Large Screen -->
	<div class="hidden md:block">
		<div class="h-screen flex bg-cover bg-center bg-no-repeat bg-fixed">
			<!-- <div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/30 to-surface-900"
			>
				<slot />
			</div> -->

			<video
				autoplay
				loop
				muted
				playsinline
				disablepictureinpicture
				class="absolute w-full h-full object-cover -z-10 pr-5 pb-6"
			>
				<source src="/vid/glowshowBackgroundClip.mp4" type="video/mp4" />
			</video>

			<div
				class="flex-1 h-full bg bg-gradient-to-b from-surface-900 via-surface-900/30 to-surface-900"
			>
				<slot />
			</div>
		</div>
	</div>
</div>

<!-- <style>
	.home-background {
		background-image: url('/img/homeBackground.jpg');
	}
</style> -->
