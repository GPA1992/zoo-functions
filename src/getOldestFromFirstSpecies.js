const data = require('../data/zoo_data');

const employeeList = data.employees;
const specie = data.species;

function getOldestFromFirstSpecies(id) {
  const employe = employeeList.filter((a) => a.id === id);
  const firstAnimal = employe[0].responsibleFor[0];
  const getSpecie = specie.filter((s) => s.id === firstAnimal)[0].residents;
  const getOlder = Math.max(...getSpecie.map((older) => older.age));
  const getOlderSpecie = getSpecie.filter((esp) => esp.age === getOlder);
  return [getOlderSpecie[0].name, getOlderSpecie[0].sex, getOlderSpecie[0].age];
}

module.exports = getOldestFromFirstSpecies;
