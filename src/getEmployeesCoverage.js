const data = require('../data/zoo_data');

const emp = data.employees;
const animals = data.species;
// Função para criar o objeto com todas as informações.
const getLocation = (ids) => ids.map((i) => animals.find((specie) => specie.id === i).location);
const getNameAnimal = (ids) => ids.map((i) => animals.find((specie) => specie.id === i).name);
const getObj = emp.map((person) => {
  const animalList = person.responsibleFor;
  const obj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: getNameAnimal(animalList),
    locations: getLocation(animalList),
  };
  return obj;
});

// Função para o retorno com nome ou sobrenome.
const getPersonByName = (name) => getObj
  .filter((person) => person.fullName.split(' ').some((a) => a === name));

// Função para o retorno com o ID.
const getPersonById = (id) => getObj.filter((person) => person.id === id);

// Função para validar se o ID é valido.
const getInvalidID = (id) => getObj.some((person) => person.id === id);

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return getObj;
  }
  if (param.name) {
    return getPersonByName(param.name)[0];
  }
  if (!getInvalidID(param.id)) {
    throw new Error('Informações inválidas');
  }
  if (param.id) {
    return getPersonById(param.id)[0];
  }
}

module.exports = getEmployeesCoverage;
