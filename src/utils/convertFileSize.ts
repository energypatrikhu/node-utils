/**
 * Converts a file size in bytes to a human-readable format.
 *
 * @param bytes - The file size in bytes.
 * @param decimalPoint - The number of decimal points to include in the converted size. Default is undefined.
 * @returns The converted file size as a string with the appropriate unit.
 */
export function convertFileSize(bytes: number, decimalPoint?: number) {
	if (bytes === 0) {
		return '0 B';
	}

	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const convertedSize = (bytes / Math.pow(k, i)).toFixed(decimalPoint);

	return `${convertedSize} ${sizes[i]}`;
}
