import toString from "./toString.js";

/**
 * Remove non-word chars.
 * @param str {string}
 * @returns {string|*}
 */
const removeNonWord = (str) => toString(str).replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
export default removeNonWord;
