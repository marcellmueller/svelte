<script>
	export let alt, aspectRatio, image;

	const {
		metadata: {
			dimensions: { width, height }
		}
	} = image;

	const ar = aspectRatio || height / width;
</script>

<div class="img container" style="padding-top: {ar * 100}%">
	<img alt={alt || ''} />
</div>

<style lang="scss">
	.container {
		width: 100%;
		position: relative;
		overflow: hidden;

		& img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
</style>
