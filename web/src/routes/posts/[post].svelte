<script context="module">
	import { getPage } from '$api';
	import { store } from '$stores';

	export const load = async (ctx) => {
		const post = ctx.params.post;
		const data = await getPage(post);

		store.site = data.site;

		return {
			props: {
				page: data.page
			}
		};
	};
</script>

<script>
	import { BlockRenderer, Share } from '$post';

	export let page;
	const { title } = page;
</script>

<section>
	<h1>{title}</h1>

	<BlockRenderer blocks={page.blockContent} />
	<Share {title} />
</section>

<style lang="scss">
	section {
		max-width: 880px;
		margin: 0 auto;
	}
</style>
