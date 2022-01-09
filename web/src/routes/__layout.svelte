<script>
	import { Header, Footer } from '$components';
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
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		padding: 64px 8px;
		max-width: $pageMaxWidth;
		margin: 0 auto;
		color: white;

		@media (min-width: $mediumUp) {
			padding: 64px 16px;
		}
	}
</style>
