<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<div class="mt-8 md:-mt-10 md:mx-10">
	<AppBar background="bg-transparent">
		<svelte:fragment slot="lead">
			<a href="tel:+59997775599" class="text-xs">+5999 777 5599</a>
		</svelte:fragment>

		<div class="flex-1 flex justify-center text-white text-xs md:text-sm gap-2 md:gap-10">
			<p>Kaya Kokolishi 24, Willemstad, Curaçao</p>
		</div>

		<svelte:fragment slot="trail">
			<a href="mailto:info@glowshow.pro" class="text-xs">info@glowshow.pro</a>
		</svelte:fragment>
	</AppBar>
</div>
