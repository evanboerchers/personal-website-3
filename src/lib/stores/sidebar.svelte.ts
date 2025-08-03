// import { getCurrentBreakpoint } from "$lib/breakpoints";

let _sidebarOpen = $state(true);

// if (getCurrentBreakpoint() === 'sm') {
// 	_sidebarOpen = false;
// } else {
// 	_sidebarOpen = true;
// }

export const sidebarStore = {
	get open() {
		return _sidebarOpen;
	},
	set open(value: boolean) {
		_sidebarOpen = value;
	}
};
