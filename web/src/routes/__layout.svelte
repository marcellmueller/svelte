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

		a {
			text-decoration: none;
			color: inherit;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}
		.headline-2 {
			font-family: 'Source Code Pro', monospace;
			font-size: 32px;
			font-weight: 700;
		}

		.headline-3 {
			font-family: 'Source Code Pro', monospace;
			font-size: 24px;
			font-weight: 700;
		}

		.body-1 {
			font-family: 'Source Code Pro', monospace;
			font-size: 18px;
			font-weight: 400;
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
