<script>
	import { Image } from '$components';
	export let post;
	const { author, category, date, slug, title } = post;
	const { image } = category;
</script>

<div class="container">
	<a href={`/posts/${slug.current}`}>{title}</a>
	<div>{author.name}</div>
	<div>{date}</div>
	<a href={`/category/${category.slug.current}`}>{post.category.title}</a>
	<div class="image-container">
		<Image alt={image.alt} {image} aspectRatio={4 / 3} />
	</div>
</div>

<style>
	.container {
		background-color: grey;
		max-width: 880px;
		margin: 1em auto;
		padding: 16px;
		border-radius: 4px;
	}

	.image-container {
		width: 100px;
	}
</style>
