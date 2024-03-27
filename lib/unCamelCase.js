import toString from "./toString.js";

/**
 * Add space between camelCase text.
 * @param str {string}
 * @returns {*}
 */
const unCamelCase = (str) => {
    str = toString(str).replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    str = str.toLowerCase();
    return str;
}

export default unCamelCase;