import { numPrefix } from './numPrefix';

/**
 * Converts seconds to a formatted time string.
 *
 * @param sec - The number of seconds to convert.
 * @param format - The format string for the output. Defaults to '{HH}:{MM}:{SS}'.
 * @returns The formatted time string.
 */
export function secToTime(
	sec: number,
	format: string = '{HH}:{MM}:{SS}',
): string {
	if (sec < 0) sec = 0;

	const days = Math.floor(sec / (60 ** 2 * 24));
	const hours = Math.floor((sec % (60 ** 2 * 24)) / 60 ** 2);
	const minutes = Math.floor((sec % 60 ** 2) / 60);
	const seconds = Math.floor(sec % 60);

	const formats: any = {
		D: days,
		H: hours,
		M: minutes,
		S: seconds,
	};

	const types = format.match(/\{(D{1,}|H{1,}|M{1,}|S{1,})\}/g);
	for (const Type of types!) {
		const type = Type.substring(1, Type.length - 1);
		format = format.replace(Type, numPrefix(formats[type[0]], type.length));
	}

	return format;
}
