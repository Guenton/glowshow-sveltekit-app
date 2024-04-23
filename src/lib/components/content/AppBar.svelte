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
	import { goto } from '$app/navigation';
</script>

<AppBar background="bg-transparent">
	<svelte:fragment slot="lead">
		<a href="/" class="block md:hidden">
			<LogoSq />
		</a>
		<a href="/" class="hidden md:block">
			<Logo />
		</a>
	</svelte:fragment>

	<div class="flex-1 flex justify-center text-white text-xs md:text-sm gap-2 md:gap-10">
		<a href="/signs">Signs</a>
		<a href="/props">Props</a>
		<a href="/shows">Shows</a>
		<a href="/contact">Contact</a>
	</div>

	<svelte:fragment slot="trail">
		<div class="block md:hidden">
			<OrdersFab on:click={() => goto('/orders')} />
			<FavoritesFab on:click={() => goto('/favorites')} />
			<SignInFab />
		</div>
		<div class="hidden md:block">
			<OrdersButton on:click={() => goto('/orders')} />
			<FavoritesButton on:click={() => goto('/favorites')} />
			<SignInButton on:click={() => goto('/')} />
		</div>
	</svelte:fragment>
</AppBar>
