/**
 Some Description
**/
const getData = () => {
    return `today: ${Date.now()}`;
}

/**
* Reverse String
*/
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

/**
* Check identical String
*/
const isIdenticalString = (strOne, strTwo) => {
    return strOne === strTwo;
}

/**
* Capitalize First Letter
*/
const capitalizeFirstLetter = (word) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    return `${firstLetterCap}${remainingLetters}`;
}

module.exports = {
  reverseString,
  isIdenticalString,
  capitalizeFirstLetter,
  getData
};
