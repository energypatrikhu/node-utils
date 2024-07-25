/**
 * Adds leading zeros to a number to match the specified number of placeholders.
 *
 * @param num - The number to add leading zeros to.
 * @param placeholders - The number of placeholders to match.
 * @returns A string representation of the number with leading zeros.
 */
export function numPrefix(num: number, placeholders: number = 0): string {
  if (num < 0) num = 0;
  if (placeholders < 0) placeholders = 0;
  return '0'.repeat(placeholders - (placeholders > 1 ? num.toString().length : 1)) + num;
}
