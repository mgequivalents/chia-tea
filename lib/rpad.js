import repeat from './repeat';

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 * @param str {string}
 * @param minLen {number}
 * @param ch {string}
 * @returns {string|*}
 */
const rpad = (str, minLen, ch) => {
    ch = ch || " ";
    return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}

export default rpad;