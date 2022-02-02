<script context="module">
  import { getPosts } from '$api';
  import { store } from '$stores';

  export const load = async () => {
    const data = await getPosts(0, 10);

    store.site = data.site;

    return {
      props: {
        page: data.page,
        count: data.count,
      },
    };
  };
</script>

<script>
  import { Pagination, PostCard } from '$post';
  export let count, page;
  export let pageNumber = 1;
  export let currentPosts = page;

  const PER_PAGE = 10;

  const newArticles = async (number) => {
    try {
      number !== 0 && (number = number * PER_PAGE);
      const offset = number + PER_PAGE;
      const pageData = await getPosts(number, offset);
      currentPosts = pageData.page;
    } catch (err) {
      console.error(err.message);
    }
  };
</script>

<section>
  {#each currentPosts as post}
    <PostCard {post} />
  {/each}
</section>

<section>
  <Pagination
    page={pageNumber}
    changePage={(number) => (pageNumber = number)}
    newArticles={(pageNumber) => newArticles(pageNumber - 1)}
    articlesCount={count}
    perPage={PER_PAGE}
  />
</section>

<style lang="scss">
  section {
    min-width: 100%;
    max-width: 880px;
    margin: 0 auto;
    background-color: red;
  }
</style>
