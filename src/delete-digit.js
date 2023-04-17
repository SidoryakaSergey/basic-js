const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let numStr = n.toString();
  // let maxNum = 0;
  // for (let i = 0; i < numStr.length; i++) {
  //   let newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
  //   if (newNum > maxNum) {
  //     maxNum = newNum;
  //   }
  // }
  // return maxNum;
  let arr = n.toString().split('');
  let min = Math.min(...arr);

  if (arr[0] < arr[1]) {
    arr.splice(0, 1);
  } else {
    arr.splice(arr.indexOf(min.toString()), 1);
  }
  return parseInt(arr.join(''));
}

module.exports = {
  deleteDigit,
};
