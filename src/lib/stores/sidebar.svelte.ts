let _sidebarOpen = $state(true);

export const sidebarStore = {
	get open() {
		return _sidebarOpen;
	},
	set open(value: boolean) {
		_sidebarOpen = value;
	}
};
