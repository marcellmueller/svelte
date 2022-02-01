<script>
	import { store } from '$stores';
	import { Header, Footer, Nav } from '$components';
</script>

<svelte:head>
	<style>
		body {
			background: black;
			margin: 0;
		}

		#svelte {
			position: relative;
			min-height: 100vh;
		}
	</style>
</svelte:head>

<Header />
<main class="body-1">
	<Nav categories={store.site.categories} />
	<div class="container">
		<slot />
	</div>
</main>

<Footer />

<style lang="scss">
	main {
		padding: 64px 8px;
		max-width: $pageMaxWidth;
		margin: 0 auto;
		color: white;
		display: flex;

		@media (min-width: $mediumUp) {
			padding: 64px 16px;
		}
	}
	.container {
		width: 100%;
	}
</style>
