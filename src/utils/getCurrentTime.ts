/**
 * Returns the current time in the specified format.
 * @returns {string} The current time formatted as "yyyy.MM.dd. HH:mm:ss".
 */
export function getCurrentTime(): string {
	return new Intl.DateTimeFormat('hu-HU', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}).format(new Date());
}

/**
 * Returns the current date and time as a formatted string.
 * The format is obtained by replacing all occurrences of '.', ':', and ',' with '.' in the current time string.
 * @returns The formatted date and time string.
 */
export function getDateTimeString() {
	return getCurrentTime().replace(/(\.\s|:)/g, '.');
}
