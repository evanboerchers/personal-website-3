// import { debounce } from "./utils";

// export const breakpoints = {
// 	sm: '--breakpoints-sm',
// 	md: '--breakpoints-md',
// 	lg: '--breakpoints-lg',
// 	xl: '--breakpoints-xl',
// 	'2xl': '--breakpoints-2xl'
// } as const;

// export type Breakpoint = keyof typeof breakpoints;

// let _initialized = false
// let _breakpoint = $state<Breakpoint>('sm')

// function setup() {
//     window.addEventListener('resize', debounce(updateBreakpoint, 200))
// }

// export function useeBreakpoint() {

// }

// const styles = getComputedStyle(document.documentElement);
// console.log('here ---' + parseInt(styles.getPropertyValue(breakpoints.sm)))

// const updateBreakpoint = () => {
// 	// _breakpoint = getBreakpoint(window.innerWidth)
// }

// const getBreakpoint = () => {

// }

// export function getCurrentBreakpoint(): Breakpoint {
// 	if (typeof window === 'undefined') return 'sm';

// 	const pixelBreakpoints: Record<Breakpoint, number> = {
// 		sm: parseInt(styles.getPropertyValue(breakpoints.sm)) || 640,
// 		md: parseInt(styles.getPropertyValue(breakpoints.md)) || 768,
// 		lg: parseInt(styles.getPropertyValue(breakpoints.lg)) || 1024,
// 		xl: parseInt(styles.getPropertyValue(breakpoints.xl)) || 1280,
// 		'2xl': parseInt(styles.getPropertyValue(breakpoints['2xl'])) || 1536
// 	};

// 	const width = window.innerWidth;
// 	let current: Breakpoint = 'sm';

// 	for (const bp of Object.entries(pixelBreakpoints)) {
// 		if (width >= bp[1]) current = bp[0] as Breakpoint;
// 	}

// 	return current;
// }
