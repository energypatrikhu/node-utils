/**
 * Converts a query object into a query string.
 *
 * @param queryObject - The query object to convert.
 * @returns The query string representation of the query object.
 */
export function queryString(queryObject: {
	[key: string | number | symbol]: any;
}): string {
	return new URLSearchParams(queryObject).toString();
}
