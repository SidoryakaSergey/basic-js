class VigenereCipheringMachine {
  constructor(straight = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberAlph = {};
    this.straight = straight;
    for (let i = 0; i < this.alphabet.length; i++) {
      this.numberAlph[this.alphabet[i]] = i;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = '';
    console.log('this.straight =', this.straight);
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] +
              this.numberAlph[key[i % key.length]]) %
              this.alphabet.length
          ];
      } else {
        encryptMessage += message[i];
      }
    }
    return this.straight
      ? encryptMessage
      : encryptMessage.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = '';
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        encryptMessage +=
          this.alphabet[
            (this.numberAlph[message[i]] -
              this.numberAlph[key[i % key.length]] +
              this.alphabet.length) %
              this.alphabet.length
          ];
      } else {
        encryptMessage += message[i];
      }
    }
    return this.straight
      ? encryptMessage
      : encryptMessage.split('').reverse().join('');
  }
}

// const code = new VigenereCipheringMachine();

// console.log(code.encrypt('attack at dawn!', 'alphonse'));
// console.log(code.decrypt('AEIHQX ET SHKA!', 'alphonse'));

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Incorrect arguments!');
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

// console.log(transform([1, '--discard-next', 2, 3, '--discard-next', 5, 6]));

function repeater(str, options) {
  if (!str) {
    throw new Error('Incorrect arguments!');
  }
  let result = '';
  let add = '';

  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';

  if (!options) {
    return str;
  }

  str = str.toString();

  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }
  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  }
  if (options.hasOwnProperty('addition')) {
    addition = options.addition.toString();
  }
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  }
  for (let i = 0; i < repeatTimes; i++) {
    console.log(i);
    add = '';
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j === additionRepeatTimes - 1) {
        add += addition;
      } else {
        add += addition + additionSeparator;
      }
      console.log('add = ', add);
    }
    if (i === repeatTimes - 1) {
      result += str + add;
    } else {
      result += str + add + separator;
    }
  }
  if (repeatTimes === 0) {
    result += str;
  }
  if (additionRepeatTimes === 0) {
    result += addition;
  }
  return result;
}

// console.log(
//   repeater(9.234, {
//     repeatTimes: 4,
//     separator: '||',
//     addition: { a: 5 },
//     additionRepeatTimes: 3,
//     additionSeparator: '&&',
//   })
// );

// '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]'
//  9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]

class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
  }

  calculateDepth(arr, depth = 1) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        const newDepth = depth + 1;
        if (newDepth > this.maxDepth) {
          this.maxDepth = newDepth;
        }
        this.calculateDepth(el, newDepth);
      }
    }
    const result = this.maxDepth;
    if (depth === 1) {
      this.maxDepth = 1;
    }
    return result;
  }
}

// const d = new DepthCalculator();
// console.log(
//   d.calculateDepth([
//     1,
//     [8, [[]]],
//     [
//       [
//         [
//           [
//             [
//               [
//                 [
//                   [
//                     [
//                       [[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]],
//                       [],
//                     ],
//                   ],
//                 ],
//               ],
//             ],
//           ],
//         ],
//       ],
//     ],
//     2,
//     3,
//     [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//     [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//     4,
//     5,
//     ['6575', ['adas', ['dfg', [0]]]],
//   ])
// );

function getCommonCharacterCount(s1, s2) {
  return s1.split('').filter(el => {
    return s2.includes(el);
  }).length;
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));

function deleteDigit(n) {
  let arr = n.toString().split('');
  let min = Math.min(...arr);
  console.log(min);
  if (arr[0] < arr[1]) {
    arr.splice(0, 1);
    console.log('object');
  } else {
    arr.splice(arr.indexOf(min.toString()), 1);
  }
  return parseInt(arr.join(''));
}

// console.log(deleteDigit(1001));

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

// console.log(encodeLine('aaaatttt'));

function getMatrixElementsSum(matrix) {
  let summ = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (i === 0) {
        summ += matrix[0][k];
      } else if (matrix[i - 1][k] !== 0) {
        summ += matrix[i][k];
      }
    }
  }
  return summ;
}

// console.log(
//   getMatrixElementsSum([
//     [1, 2, 3, 4],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );

function sortByHeight(arr) {
  return arr.sort((a, b) => {
    if (a === -1) {
      return false;
    } else {
      return a - b;
    }
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
