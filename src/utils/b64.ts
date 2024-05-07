/**
 * Converts an object to a Base64 encoded string.
 * @param object - The object to be converted.
 * @returns The Base64 encoded string representation of the object.
 */
export function ObjToB64(object: object): string {
	return StrToB64(JSON.stringify(object));
}

/**
 * Converts a Base64 string to an object.
 *
 * @param b64 - The Base64 string to convert.
 * @returns The parsed object.
 */
export function B64ToObj(b64: string): object {
	return JSON.parse(B64ToStr(b64));
}

/**
 * Converts a string to a base64url encoded string.
 *
 * @param string - The string to be converted.
 * @returns The base64url encoded string.
 */
export function StrToB64(string: string): string {
	return Buffer.from(string).toString('base64url');
}

/**
 * Converts a base64 URL encoded string to a UTF-8 string.
 *
 * @param b64 - The base64 URL encoded string to convert.
 * @returns The UTF-8 string.
 */
export function B64ToStr(b64: string): string {
	return Buffer.from(b64, 'base64url').toString('utf-8');
}
