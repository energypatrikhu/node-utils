/**
 * Returns the current timestamp in the format "YYYY-MM-DD HH:mm:ss".
 *
 * @returns The current timestamp.
 */
export function getTimestamp(): string {
	return new Date().toISOString().slice(0, 19).replace('T', ' ');
}
