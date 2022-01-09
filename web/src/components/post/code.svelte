<script>
	import Highlight from 'svelte-highlight';
	import '$styles/gruvbox-dark-hard.scss';
	import css from 'svelte-highlight/src/languages/css';
	import javascript from 'svelte-highlight/src/languages/javascript';
	import json from 'svelte-highlight/src/languages/json';
	import typescript from 'svelte-highlight/src/languages/typescript';

	//Svelte highlight
	import { HighlightSvelte } from 'svelte-highlight';

	import 'svelte-highlight/src/styles/gruvbox-dark-hard.css';

	export let portableText;
	export let code = portableText.block.code;
	export let language = portableText.block.language;
</script>

{#if language === 'svelte'}
	<HighlightSvelte {code} />
{:else if language === 'javascript'}
	<Highlight language={javascript} {code} />
{:else if language === 'css'}
	<Highlight language={css} {code} />
{:else if language === 'json'}
	<Highlight language={json} {code} />
{:else if language === 'typescript'}
	<Highlight language={typescript} {code} />
{/if}
