import { randomNumber } from './randomNumber';

/**
 * Shuffles the characters in a string.
 *
 * @param string - The string to be shuffled.
 * @returns The shuffled string.
 */
export function shuffleString(string: string): string {
	const characters = string.split('');
	for (let i = characters.length - 1; i > 0; i--) {
		const j = randomNumber(i + 1);
		[characters[i], characters[j]] = [characters[j], characters[i]];
	}
	return characters.join('');
}
