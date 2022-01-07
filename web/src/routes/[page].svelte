<script context="module">
	import { getPage } from '$api';
	export const load = async (ctx) => {
		const page = ctx.page.params.page;
		const data = await getPage(page);

		return {
			props: {
				page: data.page
			}
		};
	};
</script>

<script>
	export let page;

	const { title } = page;
</script>

<h1>{title}</h1>
