<script>
	export let categories;
</script>

<nav>
	<h3>Navigation</h3>
	<ul>
		{#each categories as category}
			<li><a href={`/category/${category.slug.current}`}>{category.title}</a></li>
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
</style>
