import { writable } from 'svelte/store';

const store = writable({
	site: {}
});

export default store;
