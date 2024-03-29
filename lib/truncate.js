import trim from "./trim.js";

/**
 * Limit number of chars.
 * @param str
 * @param maxChars
 * @param append
 * @param onlyFullWords
 * @returns {string}
 */
const truncate = (str, maxChars, append, onlyFullWords) => {
    append = append || "...";
    maxChars = onlyFullWords ? maxChars + 1 : maxChars;

    str = trim(str);
    if (str.length <= maxChars) {
        return str;
    }
    str = str.substr(0, maxChars - append.length);
    //crop at last space or remove trailing whitespace
    str = onlyFullWords ? str.substr(0, str.lastIndexOf(" ")) : trim(str);
    return str + append;
}
export default truncate;