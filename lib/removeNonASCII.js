import toString from "./toString.js";

/**
 * Remove non-printable ASCII chars
 * @param str {string}
 * @returns {*}
 */
const removeNonASCII = (str) => {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return toString(str).replace(/[^\x20-\x7E]/g, "");
}
export default removeNonASCII;