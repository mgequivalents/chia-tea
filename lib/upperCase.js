import toString from "./toString.js";

/**
 * "Safer" String.toUpperCase()
 */
const upperCase = (str) => {
    return toString(str).toUpperCase();
}
export default upperCase;