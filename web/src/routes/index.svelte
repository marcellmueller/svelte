<script context="module">
	import { getStaticPage } from '$api';

	const query = /* groq */ `
    *[_type == 'pageHome'] | order(_updatedAt desc)[0] {
			cover {
				asset->
			},
      title,
			
    }
  `;
	export const load = async () => {
		const data = await getStaticPage(query);
		return {
			props: {
				page: data.page
			}
		};
	};
</script>

<script>
	export let page;
	import { Image } from '$components/';

	const { cover, title } = page;
</script>

<div>
	<Image src={cover.asset.url} width={500} />
</div>

<style lang="scss">
</style>
