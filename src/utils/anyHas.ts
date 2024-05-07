/**
 * Checks if a string or an array of strings contains a specific value.
 *
 * @param string - The string or array of strings to check.
 * @param include - The value or array of values to include in the check. Defaults to null.
 * @param exclude - The value or array of values to exclude from the check. Defaults to null.
 * @returns A boolean indicating whether the string or array of strings contains the specified value(s).
 */
export function anyHas(
	string: string | Array<string>,
	include: null | string | Array<string> = null,
	exclude: null | string | Array<string> = null,
) {
	if (null !== exclude) {
		if ('string' == typeof exclude && string.includes(exclude)) {
			return false;
		}
		if ('object' == typeof exclude) {
			for (let exc of exclude)
				if (string.includes(exc) && '' != exc) {
					return false;
				}
		}
	}
	if (null !== include) {
		if ('string' == typeof include && string.includes(include)) {
			return true;
		}
		if ('object' == typeof include) {
			for (let inc of include)
				if (string.includes(inc) && '' != inc) {
					return true;
				}
		}
	}
	return false;
}
