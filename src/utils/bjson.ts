/**
 * Utility class for reading and writing JSON files with support for Set and Map data types.
 */
class Bjson {
	/**
	 * Replacer function used during JSON serialization to handle Set and Map data types.
	 * @param _key - The current key being processed.
	 * @param value - The value associated with the key.
	 * @returns The serialized value for Set and Map data types, or the original value for other types.
	 */
	private replacer(_key: string, value: any) {
		if (value instanceof Set)
			return {
				dataType: 'Set',
				value: [...value],
			};
		if (value instanceof Map)
			return {
				dataType: 'Map',
				value: Object.fromEntries(value),
			};
		return value;
	}

	/**
	 * Reviver function used during JSON deserialization to handle Set and Map data types.
	 * @param _key - The current key being processed.
	 * @param value - The value associated with the key.
	 * @returns The deserialized value for Set and Map data types, or the original value for other types.
	 */
	private reviver(_key: string, value: any) {
		if (
			value !== null &&
			typeof value === 'object' &&
			!Array.isArray(value) &&
			'dataType' in value
		) {
			switch (value.dataType) {
				case 'Set':
					return new Set(value.value);
				case 'Map':
					return new Map(Object.entries(value.value));
				default:
					return value;
			}
		}
		return value;
	}

	/**
	 * Parses a JSON string into a JavaScript object.
	 *
	 * @param text - The JSON string to parse.
	 * @returns The parsed JavaScript object.
	 */
	public parse(text: string) {
		return JSON.parse(text, this.reviver);
	}

	/**
	 * Converts a JavaScript value to a JSON string.
	 * @param value - The value to convert to a JSON string.
	 * @param space - The number of spaces to use for indentation, or a string used for indentation.
	 * @returns A JSON string representing the given value.
	 */
	public stringify(value: any, space?: string | number | undefined) {
		return JSON.stringify(value, this.replacer, space);
	}
}

/**
 * Represents an instance of the Json class.
 */
export const BJSON = new Bjson();
