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

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
