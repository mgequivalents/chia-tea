import toString from "./toString.js";

/**
 * Remove HTML tags from string.
 */
const stripHtmlTags = (str) => {
    return toString(str).replace(/<[^>]*>/g, "");
}

export default stripHtmlTags;