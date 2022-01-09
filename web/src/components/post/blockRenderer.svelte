<script>
	import PortableText from '@portabletext/svelte';
	import { Blocks, Code } from '$post';
	export let blocks;
</script>

<section>
	<PortableText
		{blocks}
		serializers={{
			types: {
				codeBlock: Code
			},
			blockStyles: {
				normal: Blocks,
				h2: Blocks,
				h3: Blocks
			}
		}}
	/>
</section>

<style>
	section {
		max-width: 880px;
		margin: 0 auto;
	}
</style>
