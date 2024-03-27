import unCamelCase from './unCamelCase';
import slugify from './slugify';

/**
 * Replaces spaces with hyphens, split camelCase text,
 * remove non-word chars, remove accents and convert to lower case.
 * @param str {string}
 * @param delimeter {string}
 * @returns {*}
 */
const hyphenate = (str, delimeter = '-') => {
    str = unCamelCase(str);
    return slugify(str, delimeter);
}

export default hyphenate;