import toString from "./toString.js";

/**
 * Escape string into unicode sequences
 * @param str {string}
 * @param shouldEscapePrintable {boolean}
 * @returns {*}
 */
const escapeUnicode = (str, shouldEscapePrintable) => {
    return toString(str).replace(/[\s\S]/g, function (ch) {
        // skip printable ASCII chars if we should not escape them
        if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
            return ch;
        }
        // we use "000" and slice(-4) for brevity, need to pad zeros,
        // unicode escape always have 4 chars after "\u"
        return "\\u" + ("000" + ch.charCodeAt(0).toString(16)).slice(-4);
    });
}
export default escapeUnicode;