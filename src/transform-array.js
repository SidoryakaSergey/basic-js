const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
   --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
   --double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
   --double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
 * 
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [...arr];
  let index = 0;
  do {
    if (isNaN(arr[index])) {
      switch (arr[index]) {
        case '--discard-next':
          if (index === arr.length - 1) {
            newArr[index] = '';
          } else {
            newArr[index] = '';
            newArr[index + 1] = '';
          }
          break;
        case '--discard-prev':
          if (index === 0) {
            newArr[index] = '';
          } else {
            newArr[index] = '';
            newArr[index - 1] = '';
          }
          break;
        case '--double-next':
          if (index === arr.length - 1) {
            newArr[index] = '';
          } else {
            newArr[index] = newArr[index + 1];
          }
          break;
        case '--double-prev':
          if (index === 0) {
            newArr[index] = '';
          } else {
            newArr[index] = newArr[index - 1];
          }
          break;
      }
    }
    index++;
  } while (index < arr.length);
  return newArr.filter(el => {
    return el !== '';
  });
}

module.exports = {
  transform,
};
