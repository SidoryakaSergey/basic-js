const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const sumArr = arr => {
    let s = 0;
    for (let el of arr) {
      s += parseInt(el, 10);
    }
    return s;
  };
  let arr = n.toString().split('');
  let sum = sumArr(arr);

  while (sum.toString().length > 1) {
    arr = sum.toString().split('');
    sum = sumArr(arr);
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};
