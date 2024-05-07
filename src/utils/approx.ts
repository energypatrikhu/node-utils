/**
 * Checks if two numbers are approximately equal within a given epsilon.
 *
 * @param v1 - The first number.
 * @param v2 - The second number.
 * @param epsilon - The maximum difference allowed between the two numbers. Default is 5.
 * @returns `true` if the two numbers are approximately equal, `false` otherwise.
 */
export function approx(v1: number, v2: number, epsilon = 5) {
	return Math.abs(v1 - v2) < epsilon;
}
