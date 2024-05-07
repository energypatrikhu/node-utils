/**
 * Replaces placeholders in a given text with the provided values.
 *
 * @param text - The text containing placeholders to be replaced.
 * @param replacers - The values to replace the placeholders with.
 * @returns The text with placeholders replaced by the corresponding values.
 */
export function textReplacer(text: string, ...replacers: any[]) {
	for (const [index, replacer] of replacers.entries()) {
		text = text.replace(`{${index}}`, replacer);
	}
	return text;
}
