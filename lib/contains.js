import toString from "./toString.js";

/**
 * Searches for a given substring
 * @param str {string}
 * @param substring {string}
 * @param fromIndex {number}
 * @returns {boolean}
 */
const contains = (str, substring, fromIndex) => {
    return toString(str).indexOf(substring, fromIndex) !== -1;
}
export default contains;