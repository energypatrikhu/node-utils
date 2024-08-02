/**
 * Checks if a string or an array of strings contains a specific value.
 *
 * @param string - The string or array of strings to check.
 * @param searchString - The value or array of values to check for in the string(s).
 * @param searchStringExclude - The value or array of values to exclude from the check.
 * @returns A boolean indicating whether the string or array of strings contains the specified value(s).
 */
export function includes(
  string: string | Array<string>,
  searchString: undefined | string | Array<string>,
  searchStringExclude: undefined | string | Array<string> = undefined,
) {
  if (searchString === undefined && searchStringExclude === undefined) {
    return false;
  }

  if (searchStringExclude) {
    if (typeof searchStringExclude === 'string' && typeof string === 'string' && string.includes(searchStringExclude)) {
      return false;
    }

    if (Array.isArray(searchStringExclude) && typeof string === 'string') {
      for (const search of searchStringExclude) {
        if (string.includes(search)) {
          return false;
        }
      }
    }

    if (typeof searchStringExclude === 'string' && Array.isArray(string)) {
      for (const str of string) {
        if (str.includes(searchStringExclude)) {
          return false;
        }
      }
    }
  }

  if (searchString) {
    if (typeof searchString === 'string' && typeof string === 'string' && string.includes(searchString)) {
      return true;
    }

    if (Array.isArray(searchString) && typeof string === 'string') {
      for (const search of searchString) {
        if (string.includes(search)) {
          return true;
        }
      }
    }

    if (typeof searchString === 'string' && Array.isArray(string)) {
      for (const str of string) {
        if (str.includes(searchString)) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Checks if a string or an array of strings starts with a specific value.
 *
 * @param string - The string or array of strings to check.
 * @param searchString - The value or array of values to check for at the start of the string(s).
 * @returns A boolean indicating whether the string or array of strings starts with the specified value(s).
 */
export function startsWith(string: string | Array<string>, searchString: string | Array<string>) {
  if (typeof searchString === 'string' && typeof string === 'string' && string.startsWith(searchString)) {
    return true;
  }

  if (Array.isArray(searchString) && typeof string === 'string') {
    for (const search of searchString) {
      if (string.startsWith(search)) {
        return true;
      }
    }
  }

  if (typeof searchString === 'string' && Array.isArray(string)) {
    for (const str of string) {
      if (str.startsWith(searchString)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Checks if a string or an array of strings ends with a specific value.
 *
 * @param string - The string or array of strings to check.
 * @param searchString - The value or array of values to check for at the end of the string(s).
 * @returns A boolean indicating whether the string or array of strings ends with the specified value(s).
 */
export function endsWith(string: string | Array<string>, searchString: string | Array<string>) {
  if (typeof searchString === 'string' && typeof string === 'string' && string.endsWith(searchString)) {
    return true;
  }

  if (Array.isArray(searchString) && typeof string === 'string') {
    for (const search of searchString) {
      if (string.endsWith(search)) {
        return true;
      }
    }
  }

  if (typeof searchString === 'string' && Array.isArray(string)) {
    for (const str of string) {
      if (str.endsWith(searchString)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Checks if a string or an array of strings is equal to a specific value.
 *
 * @param string - The string or array of strings to check.
 * @param searchString - The value or array of values to check for equality with the string(s).
 * @returns A boolean indicating whether the string or array of strings is equal to the specified value(s).
 */
export function isValue(string: string | Array<string>, searchString: string | Array<string>) {
  if (typeof searchString === 'string' && typeof string === 'string' && string === searchString) {
    return true;
  }

  if (Array.isArray(searchString) && typeof string === 'string') {
    for (const search of searchString) {
      if (string === search) {
        return true;
      }
    }
  }

  if (typeof searchString === 'string' && Array.isArray(string)) {
    for (const str of string) {
      if (str === searchString) {
        return true;
      }
    }
  }

  return false;
}
