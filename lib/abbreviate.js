import toString from "./toString.js";

/**
 * Capture all capital letters following a word boundary
 * (in case the input is in all caps)
 * @param str - string
 * @returns string
 */
const abbreviate = (str)  => ((toString(str).match(/\b([A-Z])/g) || []).join(""));

export default abbreviate;