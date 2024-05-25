import { allChars } from './global';
import { randomNumber } from './randomNumber';

export function randomString(length: number = 16): string {
	let result = '';
	for (let i = 0; i < length; i++) {
		result += allChars.charAt(randomNumber(allChars.length));
	}
	return result;
}
