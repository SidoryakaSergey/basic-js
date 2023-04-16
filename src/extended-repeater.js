const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
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

  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }
  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  }
  if (options.hasOwnProperty('addition')) {
    addition = options.addition;
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

module.exports = {
  repeater,
};
