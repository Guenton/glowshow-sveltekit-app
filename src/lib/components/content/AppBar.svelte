<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from '../images/Logo.svelte';
	import OrdersButton from '../buttons/OrdersButton.svelte';
	import FavoritesButton from '../buttons/FavoritesButton.svelte';
	import SignInButton from '../buttons/SignInButton.svelte';
	import LogoSq from '../images/LogoSq.svelte';
	import FavoritesFab from '../buttons/FavoritesFab.svelte';
	import OrdersFab from '../buttons/OrdersFab.svelte';
	import SignInFab from '../buttons/SignInFab.svelte';
</script>

<AppBar background="bg-transparent">
	<svelte:fragment slot="lead">
		<div class="block md:hidden">
			<LogoSq />
		</div>
		<div class="hidden md:block">
			<Logo />
		</div>
	</svelte:fragment>

	<div class="flex-1 flex justify-center text-white gap-2 md:gap-10">
		<span>Signs</span>
		<span>Props</span>
		<span>Shows</span>
		<span>Contact</span>
	</div>

	<svelte:fragment slot="trail">
		<div class="block md:hidden">
			<OrdersFab />
			<FavoritesFab />
			<SignInFab />
		</div>
		<div class="hidden md:block">
			<OrdersButton />
			<FavoritesButton />
			<SignInButton />
		</div>
	</svelte:fragment>
</AppBar>
