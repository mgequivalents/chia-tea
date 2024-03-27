import toString from "./toString.js";

/**
 * Escape RegExp string chars.
 * @param str {string}
 * @returns {*}
 */
const escapeRegExp = (str) => {
    const ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
    return toString(str).replace(ESCAPE_CHARS, "\\$&");
}
export default escapeRegExp;