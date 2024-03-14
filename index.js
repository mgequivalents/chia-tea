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


module.exports = {
  reverseString,
  getData
};
