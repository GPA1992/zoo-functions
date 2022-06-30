const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

const isManager = (id) => managers.some((gerente) => gerente === id);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const emp = data.employees;
  const empByManager = emp.filter((e) => e.managers.some((p) => p === managerId));
  return empByManager.map((person) => `${person.firstName} ${person.lastName}`);
};
console.log(getRelatedEmployees(olaId));
module.exports = { isManager, getRelatedEmployees };

//
//
//
//
//
/* const getEmployeeByManager = (managerName) => {
  const emp = data.employees;
  return emp.filter((e) => e.managers.some((p) => p === managerName));
};

console.log(getEmployeeByManager(stephanieId)); */
