/**
 * @file dtrt-string-utils.js
 */

/**
 * getIndefiniteArticle
 * @summary Get the appropriate indefinite article for the specified string
 * @param {string} str - String
 * @returns {string} indefiniteArticle
 */
export const getIndefiniteArticle = (str) => {
  const firstLetter = str.slice(0, 1).toLowerCase();
  const strLower = str.toLowerCase();

  let art = (firstLetter.match(/^(a|e|i|o|u)$/)) ? 'an' : 'a';

  if (strLower === 'null') {
    art = '';
  }

  return art;
};

/**
 * stringToCapitalised
 * @summary Capitalise a string
 * @param {string} str - String to convert
 * @returns {string} capitalisedStr
 */
export const stringToCapitalised = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * stringToId
 * @summary Convert a string into a form safe for use as an HTML id attribute.
 * @param {string} str - String to convert
 * @returns {string} safeStr
 */
export const stringToId = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  // Note: "/" is a valid ID character in HTML5, but fails in querySelector.
  let safeStr = str
    .trim()
    .toLowerCase()
    .replaceAll(/([ /.,'"!()])+/g, '-')
    .replaceAll(/[-]{2,}/g, '-'); // --

  if (safeStr[safeStr.length - 1] === '-') {
    safeStr = safeStr.slice(0, -1);
  }

  if (safeStr[0] === '-') {
    safeStr = safeStr.slice(1);
  }

  return safeStr;
};
