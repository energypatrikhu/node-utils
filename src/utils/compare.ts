/**
 * Compares two versions and returns a number indicating their relationship.
 * @param version1 - The first version to compare.
 * @param version2 - The second version to compare.
 * @returns A number indicating the relationship between the versions:
 * - 0 if the versions are equal.
 * - 1 if version1 is greater than version2.
 * - -1 if version1 is less than version2.
 */
export function compareVersions(version1: any, version2: any) {
	if (version1 === version2) {
		return 0;
	}

	const v1Arr = version1.toString().match(/\d+/g)!;
	const v2Arr = version2.toString().match(/\d+/g)!;

	for (let i = 0; i < Math.min(v1Arr.length, v2Arr.length); i++) {
		const nV1 = parseInt(v1Arr[i]);
		const nV2 = parseInt(v2Arr[i]);

		if (nV1 > nV2) {
			return 1;
		} else if (nV1 < nV2) {
			return -1;
		}
	}

	return 0;
}

/**
 * Compares two numbers and returns a value indicating their relative order.
 * @param a - The first number to compare.
 * @param b - The second number to compare.
 * @returns 0 if the numbers are equal, 1 if the first number is greater, -1 if the second number is greater.
 */
export function compareNumbers(a: any, b: any) {
	if (a === b) {
		return 0;
	}

	const nV1 = parseInt(a);
	const nV2 = parseInt(b);

	if (nV1 > nV2) {
		return 1;
	} else if (nV1 < nV2) {
		return -1;
	}

	return 0;
}
