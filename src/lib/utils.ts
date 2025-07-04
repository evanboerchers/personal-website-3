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
