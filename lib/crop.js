import truncate from './truncate.js';
import toString from './toString.js';

/**
 * Truncate string at full words.
 * @param str {string}
 * @param maxChars {number}
 * @param append {boolean}
 * @returns {*}
 */
const crop = (str, maxChars, append) => {
    return truncate(toString(str), maxChars, append, true);
}
export default crop;