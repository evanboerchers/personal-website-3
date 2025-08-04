// This is kinda trash. Use stores?

export const breakpoints = {
	xs: '--breakpoints-xs',
	sm: '--breakpoints-sm',
	md: '--breakpoints-md',
	lg: '--breakpoints-lg',
	xl: '--breakpoints-xl',
	'2xl': '--breakpoints-2xl'
} as const;

export type Breakpoint = keyof typeof breakpoints;

const pixelBreakpoints: Record<Breakpoint, number> = {
	xs: 475,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536
};

let _initialized = false;
let breakpoint = $state<Breakpoint>('sm');

const updateBreakpoint = () => {
	breakpoint = getBreakpoint(window.innerWidth);
};

const getBreakpoint = (width: number) => {
	let current: Breakpoint = 'sm';
	for (const bp of Object.entries(pixelBreakpoints)) {
		if (width >= bp[1]) current = bp[0] as Breakpoint;
	}
	return current;
};

export function useBreakpoint() {
	// const styles = getComputedStyle(document.documentElement);

	if (!_initialized) {
		// pixelBreakpoints = {
		// 	...pixelBreakpoints,
		// 	sm: parseInt(styles.getPropertyValue(breakpoints.sm)),
		// 	md: parseInt(styles.getPropertyValue(breakpoints.md)),
		// 	lg: parseInt(styles.getPropertyValue(breakpoints.lg)),
		// 	xl: parseInt(styles.getPropertyValue(breakpoints.xl)),
		// 	'2xl': parseInt(styles.getPropertyValue(breakpoints['2xl']))
		// };
		window.addEventListener('resize', () => {
			updateBreakpoint();
		});
		_initialized = true;
	}

	return breakpoint;
}
