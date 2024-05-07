export function randomNumber(max: number): number;
export function randomNumber(min: number, max: number): number;
export function randomNumber(min: number, max?: number): number {
	if (max === undefined) {
		max = min;
		min = 0;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
