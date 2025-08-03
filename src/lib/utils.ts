import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const formatDate = (date: string): string => {
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	}).format(new Date(date));
};

export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs));
};

//eslint-disable-next-line
export function debounce<T extends (...args: any[]) => void>(
	fn: T,
	delay: number
): T {
	let timeoutId: ReturnType<typeof setTimeout>;

	//eslint-disable-next-line
	return function (this: any, ...args: Parameters<T>) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	} as T;
}
