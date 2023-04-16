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

function createDreamTeam(members) {
  const ABC = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const arrABC = ABC.split('');

  const first = members.map(el => {
    return el.trim().toUpperCase()[0];
  });

  nameComand = first
    .filter(el => {
      return arrABC.includes(el);
    })
    .sort()
    .join('');
  return nameComand.length === 0 ? false : nameComand;
}

// console.log(
//   createDreamTeam([
//     '   William Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ])
// );

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

  // Проверка наличия всех необходимых свойств у переданного объекта
  const dateProperties = Object.getOwnPropertyNames(Date.prototype);
  const fakeDateProperties = Object.getOwnPropertyNames(date);
  const hasAllProperties =
    fakeDateProperties.every(property => dateProperties.includes(property)) &&
    date instanceof Date &&
    Object.prototype.toString.call(date) === '[object Date]';

  // Проверка с помощью instanceof
  if (!hasAllProperties) {
    throw new Error('Invalid date!');
  }

  return month[date.getMonth()];
}

console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)));
