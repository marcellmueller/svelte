<script context="module">
  import { getStaticPage } from '$api';
  import { store } from '$stores';

  const query = /* groq */ `
    *[_type == 'pageHome'] | order(_updatedAt desc)[0] {
			'cover': cover.asset->,
      title,
			
    }
  `;

  export const load = async () => {
    const data = await getStaticPage(query);
    store.site = data.site;

    return {
      props: {
        page: data.page,
      },
    };
  };
</script>

<script>
  export let page;
  import { Image } from '$components/';

  const { cover, title } = page;
</script>

<div>
  <Image image={cover} />
</div>

<style lang="scss">
</style>
