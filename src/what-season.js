const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function isValidDate(date) {
  if (!date || !(date instanceof Date)) {
    return false;
  }

  const dateProperties = Object.getOwnPropertyNames(date);
  const realDateProperties = Object.getOwnPropertyNames(new Date());

  if (dateProperties.length !== realDateProperties.length) {
    return false;
  }

  for (let i = 0; i < dateProperties.length; i++) {
    if (dateProperties[i] !== realDateProperties[i]) {
      return false;
    }
  }

  return true;
}

function getSeason(date) {
  const month = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!isValidDate(date)) {
    throw new Error('Invalid date!');
  }

  return month[date.getMonth()];
}

module.exports = {
  getSeason,
};
