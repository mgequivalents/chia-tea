import toString from "./toString.js";

/**
 * "Safer" String.toLowerCase()
 * @param str {string}
 * @returns {*}
 */
const lowerCase = (str) => {
    return toString(str).toLowerCase();
}

export default lowerCase;