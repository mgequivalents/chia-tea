import toString from "./toString.js";

/**
 * String interpolation
 * @param template {string}
 * @param replacements {string}
 * @param syntax {*}
 * @returns {boolean | Promise<CSSStyleSheet> | void}
 */
const interpolate = (template, replacements, syntax) => {
    const stache = /\{\{(\w+)\}\}/g;

    const replaceFn = function (match, prop) {
        return prop in replacements ? replacements[prop] : "";
    };

    return toString(template).replace(syntax || stache, replaceFn);
}
export default interpolate;