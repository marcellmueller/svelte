<script>
	import PortableText from '@portabletext/svelte';
	import { Blocks, Code } from '$post';
	export let blocks;
</script>

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

<style>
</style>
