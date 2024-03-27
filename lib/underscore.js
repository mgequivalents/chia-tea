import unCamelCase from './unCamelCase';
import slugify from './slugify';

/**
 * Replaces spaces with underscores, split camelCase text, remove
 * non-word chars, remove accents and convert to lower case.
 * @param str {string}
 * @returns {*}
 */
const underscore = (str) => {
    str = unCamelCase(str);
    return slugify(str, "_");
}

export default underscore;
