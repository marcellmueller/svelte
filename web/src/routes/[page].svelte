<script context="module">
	import { getPage } from '$api';
	export const load = async (ctx) => {
		const page = ctx.params.page;
		const data = await getPage(page);

		return {
			props: {
				page: data.page
			}
		};
	};
</script>

<script>
	import { BlockRenderer } from '$post';

	export let page;

	const { title } = page;
</script>

<section>
	<h1>{title}</h1>

	<BlockRenderer blocks={page.blockContent} />
</section>

<style lang="scss">
	section {
		max-width: 880px;
		margin: 0 auto;
	}
</style>
