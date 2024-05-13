/**
 * Waits for a specific value to be returned by a given function.
 *
 * @param _function - The function to be executed repeatedly until the desired value is returned.
 * @param value - The value to wait for.
 * @returns A promise that resolves to the awaited value or `undefined` if the value is not found.
 */
export async function awaitValue<T>(_function: () => Promise<T> | T, value: T): Promise<T | undefined> {
	return new Promise<T | undefined>((resolve) => {
		const _awaiter = setInterval(async () => {
			const result = await _function();
			if (result === value) {
				clearInterval(_awaiter);
				resolve(value);
				return;
			}
		}, 0);
	});
}
