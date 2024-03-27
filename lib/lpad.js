import repeat from './repeat';

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 * @param str {string}
 * @param minLen {number}
 * @param ch {string}
 * @returns {*}
 */
const lpad = (str, minLen, ch) => {
    ch = ch || " ";
    return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}
export default lpad;