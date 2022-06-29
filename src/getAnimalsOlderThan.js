const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((specie) => specie.name === animal);
  return species.residents.every((morador) => morador.age >= age);
};
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
