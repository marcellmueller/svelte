<script>
	export let portableText;
	const style = portableText.block.style;
</script>

{#if style === 'normal'}
	<p><slot /></p>
{:else if style === 'h2'}
	<h2><slot /></h2>
{:else if style === 'h3'}
	<h3><slot /></h3>
{/if}

<style>
	p {
		margin: 2em 1em;
	}
	h2,
	h3 {
	}
</style>
