import { randomNumber } from './randomNumber';

/**
 * Suspends the execution of the current async function for a random duration between `msMin` and `msMax` milliseconds.
 * If `msMax` is not provided, the duration will be exactly `msMin` milliseconds.
 *
 * @param msMin - The minimum duration in milliseconds.
 * @param msMax - The maximum duration in milliseconds (optional).
 * @returns A promise that resolves after the specified duration.
 */
export function sleep(msMin: number, msMax?: number): Promise<void> {
	const timeout =
		Math.abs(msMin) +
		(!!msMax ? randomNumber(Math.abs(msMax - msMin + 1)) : 0);

	return new Promise((resolve) => setTimeout(resolve, timeout));
}
