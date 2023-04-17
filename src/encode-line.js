const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let prefix = 1;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      prefix++;
    } else if (prefix !== 1) {
      result += prefix.toString() + arr[i];
      prefix = 1;
    } else {
      result += arr[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
