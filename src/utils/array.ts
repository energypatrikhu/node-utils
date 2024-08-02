/**
 * Filter an array based on a given expression.
 * @param array The array to filter.
 * @param expression The expression to filter the array by.
 */
export function filter<T>(array: T[], expression: (item: T) => any) {
  if (!Array.isArray(array)) {
    return [];
  }

  const filteredArray = [];

  for (const item of array) {
    if (expression(item)) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}

/**
 * Filter an array based on a given expression asynchronously.
 * @param array The array to filter.
 * @param expression The expression to filter the array by.
 */
export async function filterAsync<T>(array: T[], expression: (item: T) => Promise<any>) {
  if (!Array.isArray(array)) {
    return [];
  }

  const filteredArray = [];

  for (const item of array) {
    if (await expression(item)) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}

/**
 * Map an array based on a given expression.
 * @param array The array to map.
 * @param expression The expression to map the array by.
 */
export function map<T>(array: T[], expression: (item: T) => any) {
  if (!Array.isArray(array)) {
    return [];
  }

  const mappedArray = [];

  for (const item of array) {
    mappedArray.push(expression(item));
  }

  return mappedArray;
}

/**
 * Map an array based on a given expression asynchronously.
 * @param array The array to map.
 * @param expression The expression to map the array by.
 */
export async function mapAsync<T>(array: T[], expression: (item: T) => Promise<any>) {
  if (!Array.isArray(array)) {
    return [];
  }

  const mappedArray = [];

  for (const item of array) {
    mappedArray.push(await expression(item));
  }

  return mappedArray;
}
