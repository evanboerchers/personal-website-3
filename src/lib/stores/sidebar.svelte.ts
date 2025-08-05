import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { breakpoint } from './breakpoints';

let _sidebarOpen = $state(true);

if (browser) {
	const current = get(breakpoint);
	if (current === 'xs' || current === 'sm') {
		_sidebarOpen = false;
	}
	breakpoint.subscribe((bp) => {
		if (bp === 'xs' || bp === 'sm') {
			_sidebarOpen = false;
		}
	});
}

export const sidebarStore = {
	get open() {
		return _sidebarOpen;
	},
	set open(value: boolean) {
		_sidebarOpen = value;
	}
};
