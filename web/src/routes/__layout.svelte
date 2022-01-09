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
		padding: 64px 0;
		max-width: $pageMaxWidth;
		margin: 0 auto;
		color: white;
	}
</style>
