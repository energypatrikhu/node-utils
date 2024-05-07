/**
 * Converts a time string in the format "HH:MM:SS" to seconds.
 *
 * @param timeStr - The time string to convert.
 * @returns The number of seconds represented by the time string.
 */
export function timeToSec(timeStr: string) {
	return timeStr
		.split(':')
		.reverse()
		.map((x: string, i: number) =>
			i != 0 ? parseInt(x) * 60 ** i : parseInt(x),
		)
		.reduce((a: number, b: number) => a + b);
}
