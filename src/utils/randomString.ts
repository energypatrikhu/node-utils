import { allChars } from './global';

export function randomString(length: number = 16): string {
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		result += allChars.charAt(randomIndex);
	}
	return result;
}
