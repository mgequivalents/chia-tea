/**
 * Safe transform to string
 * @param val {*}
 * @returns {string|*}
 */
const toString = (val) => {
    return val == null ? '' : val.toString();
}

export default toString;