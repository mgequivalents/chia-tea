import { WHITE_SPACES } from './constants';
/**
 * Remove chars from beginning of string.
 */
const ltrim = (str, chars) => {
    chars = chars || WHITE_SPACES;
    const charLen = chars.length;
    let start = 0,
        len = str.length,
        found = true,
        i,
        c;

    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }

    return start >= len ? "" : str.substr(start, len);
}

export default ltrim;