const data = require('../data/zoo_data');

// Função para retornar os animais de cada dia.
const speciesForDay = (day) => {
  const animais = data.species.filter((s) => s.availability.some((d) => d === day));
  return animais.map((a) => a.name);
};

// Função para criar o objeto de retorno caso o parametro seja invalido de alguma forma.
const days = Object.keys(data.hours);
const obj = {};

days.forEach((d) => {
  if (d === 'Monday') {
    obj[d] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    obj[d] = { officeHour: `Open from ${data.hours[d].open}am until ${data.hours[d].close}pm`,
      exhibition: speciesForDay(d) };
  }
});

// função para checar se o paramentro é um animal.
const checkIfAnimal = (value) => {
  const arr = data.species.map((s) => s.name);
  return arr.some((s) => s === value);
};
console.log(checkIfAnimal('lions'));
//--------

// função para checar se o paramentro é um dia.
const checkIfDay = (value) => days.some((d) => d === value);
//--------

// Função principal.
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return obj;
  }
  if (checkIfAnimal(scheduleTarget) === true) {
    return data.species.filter((s) => s.name === scheduleTarget)[0].availability;
  }
  if (checkIfDay(scheduleTarget) === true) {
    return { [scheduleTarget]: obj[scheduleTarget] };
  }
  return obj;
}

module.exports = getSchedule;

console.log(getSchedule('Tuesday'));
