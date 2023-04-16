const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const ABC = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const arrABC = ABC.split('');
  if (!Array.isArray(members)) {
    return false;
  }
  const first = members.map(el => {
    if (typeof el === 'string') {
      return el.trim().toUpperCase()[0];
    } else {
      return '1';
    }
  });

  nameComand = first
    .filter(el => {
      return arrABC.includes(el);
    })
    .sort()
    .join('');
  return nameComand.length === 0 ? false : nameComand;
}

module.exports = {
  createDreamTeam,
};
