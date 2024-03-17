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

module.exports = {
  reverseString,
  isIdenticalString,
  getData
};
