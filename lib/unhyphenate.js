import toString from "./toString.js";

/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
const unhyphenate = (str) => {
    return toString(str).replace(/(\w)(-)(\w)/g, "$1 $3");
}

export default unhyphenate;