import { writable, type Writable } from 'svelte/store';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const cssBreakpointVars: Record<Breakpoint, string> = {
	xs: '--breakpoints-xs',
	sm: '--breakpoints-sm',
	md: '--breakpoints-md',
	lg: '--breakpoints-lg',
	xl: '--breakpoints-xl',
	'2xl': '--breakpoints-2xl'
};

const pixelBreakpoints: Record<Breakpoint, number> = {
	xs: 475,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536
};

function readCssBreakpoints() {
	const styles = getComputedStyle(document.documentElement);
	for (const bp of Object.keys(cssBreakpointVars) as Breakpoint[]) {
		const raw = styles.getPropertyValue(cssBreakpointVars[bp]).trim();
		const px = parseInt(raw.replace('px', ''));
		if (!isNaN(px)) pixelBreakpoints[bp] = px;
	}
}

function getBreakpoint(width: number): Breakpoint {
	let current: Breakpoint = 'xs';
	for (const [bp, px] of Object.entries(pixelBreakpoints)) {
		if (width >= px) current = bp as Breakpoint;
	}
	return current;
}

function createBreakpointStore(): Writable<Breakpoint> {
	const store = writable<Breakpoint>('sm');
	const { subscribe, set, update } = store;

	if (typeof window !== 'undefined') {
		readCssBreakpoints();

		const handleResize = () => {
			set(getBreakpoint(window.innerWidth));
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', handleResize);
	}

	return { subscribe, set, update };
}

export const breakpoint = createBreakpointStore();
