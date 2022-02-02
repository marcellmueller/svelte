<script>
  export let categories;
</script>

<nav>
  <h3>Navigation</h3>

  <ul>
    <li class="category-title">Site</li>
    <li>
      <a href={`/`}>Home</a>
    </li>
  </ul>
  <ul>
    <li class="category-title">Categories</li>
    {#each categories as category}
      <li>
        <a href={`/category/${category.slug.current}`}>{category.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    padding-right: 1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  a:hover {
    color: red;
  }

  .category-title {
    color: red;
    margin-bottom: 2px;
  }
</style>
