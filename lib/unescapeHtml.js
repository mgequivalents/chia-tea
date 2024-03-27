import toString from "./toString.js";

/**
 * Unescapes HTML special chars
 * @param str
 * @returns {*}
 */
const unescapeHtml = (str) => {
    return toString(str)
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"');
}

export default unescapeHtml;