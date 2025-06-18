export const formatDate = (date: string): string => {
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	}).format(new Date(date));
};
