import camelCase from './camelCase';
import upperCase from './upperCase';

/**
 * camelCase + UPPERCASE first char
 * @param str {string}
 * @returns {string|*}
 */
const pascalCase = (str) => {
    return camelCase(str).replace(/^[a-z]/, upperCase);
}
export default pascalCase;