const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catEars = '^^';
  let cats = 0;
  for (let row of matrix) {
    cats += row.filter(el => {
      return el === catEars;
    }).length;
  }
  return cats;
}

module.exports = {
  countCats,
};
