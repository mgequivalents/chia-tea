import replaceAccents from './replaceAccents';
import removeNonWord from './removeNonWord';
import upperCase from './upperCase';
import lowerCase from './lowerCase';

/**
 * Convert string to camelCase text.
 * @param str
 * @returns {string|*}
 */
const camelCase = (str) => {
    str = replaceAccents(str);
    str = removeNonWord(str)
        .replace(/\-/g, " ") //convert all hyphens to spaces
        .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
        .replace(/\s+/g, "") //remove spaces
        .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
}

export default camelCase;