import { randomNumber } from './randomNumber';

/**
 * Suspends the execution of the current async function for a random duration between `msMin` and `msMax` milliseconds.
 * If `msMax` is not provided, the duration will be exactly `msMin` milliseconds.
 *
 * @param msMin - The minimum duration in milliseconds.
 * @param msMax - The maximum duration in milliseconds (optional).
 * @returns A promise that resolves after the specified duration.
 */
export function sleep(msMin: number): Promise<void>;
export function sleep(msMin: number, msMax: number): Promise<void>;
export function sleep(msMin: number, msMax?: number): Promise<void> {
	if (msMax === undefined) {
		return new Promise((resolve) => setTimeout(resolve, msMin));
	}

	const timeout = msMin + randomNumber(msMax - msMin + 1);

	return new Promise((resolve) => setTimeout(resolve, timeout));
}
