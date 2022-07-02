const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((p) => {
    if (p.age < 18) {
      obj.child += 1;
    }
    if (p.age >= 18 && p.age < 50) {
      obj.adult += 1;
    }
    if (p.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arr = Object.values(countEntrants(entrants));
  const [child, adult, senior] = arr;
  const childValue = child * 20.99;
  const adultValue = adult * 49.99;
  const seniorValue = senior * 24.99;
  return childValue + adultValue + seniorValue;
};

module.exports = { calculateEntry, countEntrants };
