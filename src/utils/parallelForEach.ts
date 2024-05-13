import { logger } from './logger';

let DEBUG = false;

function log(...message: Array<any>) {
	if (DEBUG) logger('info', '[e-utils:parallelForEach]', ...message);
}

/**
 * Switches debug mode.
 *
 * @param {boolean} value - A boolean value to enable or disable debug mode.
 */
export function debugMode(value: boolean) {
	DEBUG = value;
}

/**
 * Executes a worker function for each element in the array in parallel.
 *
 * @template T - The type of elements in the array.
 * @param {T[] | Set<T> | Map<any, T>} array - The array of elements to process.
 * @param {(data: any) => void} callback - A callback function to execute when an element is processed.
 * @param {{ maxWorkers?: number }} [options] - Optional configuration options.
 * @returns {Promise<void>} A promise that resolves when all elements have been processed.
 *
 * @example
 * // index.ts
 * import { parallelForEach } from '@energypatrikhu/node-utils';
 * await parallelForEach(
 *      [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
 *      (data: number) => {
 *          console.log(data * 2);
 *      },
 * );
 *	console.log('done');
 */
export function parallelForEach<T>(
	array: T[] | Set<T> | Map<any, T>,
	callback: (data: any) => void | Promise<void>,
	options?: { maxWorkers?: number },
): Promise<void> {
	return new Promise<void>((__resolve) => {
		const __maxWorkers = options?.maxWorkers || 2;

		log(`Using ${__maxWorkers} workers`);

		let entries: Set<{ index: number; state: string; value: T }>;

		// Transform into a 'Set' with index, state and value to indicate if its processing
		if (array instanceof Map) {
			entries = new Set<{ index: number; state: string; value: T }>(
				[...array.entries()].map(([index, value]) => ({
					index,
					state: 'pending',
					value,
				})),
			);
		} else if (array instanceof Set) {
			entries = new Set<{ index: number; state: string; value: T }>(
				[...array].map((value, index) => ({
					index,
					state: 'pending',
					value,
				})),
			);
		} else {
			entries = new Set<{ index: number; state: string; value: T }>(
				array.map((value, index) => ({
					index,
					state: 'pending',
					value,
				})),
			);
		}

		// Get next pending entry to process with index and value
		const getNextPending = () => [...entries.values()].find((entry) => entry.state === 'pending');

		// Get length of entries by state
		const getLengthByState = (state: string) => [...entries.values()].filter((entry) => entry.state === state).length;

		// Remove processed entry to free up memory
		const remove = (index: number) => {
			log('Removing entry');

			const entry = [...entries.values()].find((entry) => entry.index === index);
			if (entry) entries.delete(entry);

			// Resolve promise if all entries are processed
			if (entries.size === 0) __resolve();
		};

		// Process entries
		const processEntries = async () => {
			if (entries.size === 0 || getLengthByState('processing') === __maxWorkers) return;

			const entry = getNextPending();
			if (!entry) return;

			entry.state = 'processing';

			log('Starting process');

			await callback(entry.value);

			remove(entry.index);
			processEntries();
		};

		// Start processing entries with maxWorkers
		for (let i = 0; i < __maxWorkers; i++) {
			processEntries();
		}
	});
}
