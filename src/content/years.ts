// `since` is a 'YYYY-MM' month. Counts whole years up to `now`, never below 1.
export function yearsSince(since: string, now = new Date()): number {
	const [year, month] = since.split('-').map(Number);
	const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
	return Math.max(1, Math.floor(months / 12));
}
