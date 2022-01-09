<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import gruvboxDarkHard from 'svelte-highlight/src/styles/gruvbox-dark-hard';
	export let portableText;
	export let code = portableText.block.code;
</script>

<svelte:head>
	{@html gruvboxDarkHard}
</svelte:head>

<HighlightSvelte {code} />

<style lang="scss">
	div {
		border-radius: 8px;
	}
</style>
