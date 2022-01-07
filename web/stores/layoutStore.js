import { writable } from 'svelte/store';

const LayoutStore = writable({
	nav: 'nav',
	footer: 'footer'
});

export default LayoutStore;
