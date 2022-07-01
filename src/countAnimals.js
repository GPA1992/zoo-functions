const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.residents.length }), {});
  }
  if (!animal.sex) {
    return data.species.find((a) => a.name === animal.specie).residents.length;
  }
  return data.species
    .find((a) => a.name === animal.specie).residents.filter((b) => b.sex === animal.sex).length;
};
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
