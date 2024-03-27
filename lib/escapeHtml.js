import toString from "./toString.js";

/**
 * Escapes a string for insertion into HTML.
 */
const escapeHtml = (str) => {
    str = toString(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");

    return str;
}

export default escapeHtml;