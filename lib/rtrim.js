import { WHITE_SPACES } from './constants';

/**
 * Remove chars from end of string.
 * @param str
 * @param chars
 * @returns {*|string}
 */
const rtrim = (str, chars) => {
    chars = chars || WHITE_SPACES;

    const charLen = chars.length;
    let end = str.length - 1, found = true, i, c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return end >= 0 ? str.substring(0, end + 1) : "";
}

export default rtrim;