<script>
	import { Email, Facebook, Twitter } from 'svelte-share-buttons-component';
	export let title, url;
</script>

<div class="container">
	<Email subject={title} body=" {url}" />

	<Facebook class="share-button" quote={title} {url} />
	<Twitter
		class="share-button"
		text={title}
		{url}
		hashtags="github,svelte"
		via="username"
		related="other,users"
	/>
</div>

<style>
	.container {
		width: fit-content;
		margin: 0 auto;
	}
</style>
