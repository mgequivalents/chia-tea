import rtrim from './rtrim';
import ltrim from './ltrim';
import { WHITE_SPACES } from './constants';
/**
 * Remove white-spaces from beginning and end of string.
 * @param str {string}
 * @param chars {number}
 * @returns {string}
 */
const trim = (str, chars) => {
    chars = chars || WHITE_SPACES;
    return ltrim(rtrim(str, chars), chars);
}
export default trim;