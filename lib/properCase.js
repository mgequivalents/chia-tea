import lowerCase from './lowerCase';
import upperCase from './upperCase';

/**
 * UPPERCASE first char of each word.
 */
const properCase = (str) => {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}
export default properCase;