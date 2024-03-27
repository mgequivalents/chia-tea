const truncate = require('./truncate');

/**
 * Truncate string at full words.
 * @param str {string}
 * @param maxChars {number}
 * @param append {boolean}
 * @returns {*}
 */
const crop = (str, maxChars, append) => {
    return truncate(str, maxChars, append, true);
}
export default crop;