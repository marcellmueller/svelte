<script context="module">
	import { getCategoryPages } from '$api';
	import { store } from '$stores';

	export const load = async (ctx) => {
		const category = ctx.params.category;
		const data = await getCategoryPages(category, 0, 10);

		store.site = data.site;

		return {
			props: {
				page: data.page,
				site: data.site
			}
		};
	};
</script>

<script>
	import { PostCard } from '$post';
	export let page;
	console.log(page);
</script>

<section>
	{#each page as post}
		<PostCard {post} />
	{/each}
</section>

<style lang="scss">
	section {
		min-width: 100%;
		max-width: 880px;
		margin: 0 auto;
	}
</style>
