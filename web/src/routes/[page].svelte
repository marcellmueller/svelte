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

<h1>{title}</h1>

<BlockRenderer blocks={page.blockContent} />
