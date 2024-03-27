import toString from "./toString.js";

/**
 * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
 * @param str {string}
 * @param lineEnd {string}
 * @returns {string|*}
 */
const normalizeLineBreaks = (str, lineEnd) => {
    lineEnd = lineEnd || "\n";

    return toString(str)
        .replace(/\r\n/g, lineEnd) // DOS
        .replace(/\r/g, lineEnd) // Mac
        .replace(/\n/g, lineEnd); // Unix
}

export default normalizeLineBreaks;