const data = require('../data/zoo_data');
// --- Items usados.
const locations = ['NE', 'NW', 'SE', 'SW'];
const animals = data.species;
// --- Criação do objeto padrão apenas com as especies por cada região.
const getAnimalsLocation = (lo) => animals.filter((e) => e.location === lo);
const getAnimalSpecies = (LO) => getAnimalsLocation(LO).map((a) => a.name);
const speciesByLocation = {};
locations.forEach((l) => {
  speciesByLocation[l] = getAnimalSpecies(l);
});
// --- com a opção `includeNames: true` especificada.
const nameBySpeciesLocation = locations.reduce((o, key) => ({ ...o,
  [key]: speciesByLocation[key].map((i) => ({
    [i]: animals.find((x) => x.name === i).residents.map((z) => z.name),
  })) }), {});
// --- com a opção `includeNames: true` e sorted: true especificada.
const sortednameBySpeciesLocation = locations.reduce((o, key) => ({ ...o,
  [key]: speciesByLocation[key].map((i) => ({
    [i]: animals.find((x) => x.name === i).residents.map((z) => z.name).sort(),
  })) }), {});
// --- com a opção sex especificada.
const nameBySex = (sex) => locations.reduce((o, key) => ({ ...o,
  [key]: speciesByLocation[key].map((i) => ({
    [i]: animals.find((x) => x.name === i)
      .residents.filter((m) => m.sex === sex).map((z) => z.name),
  })) }), {});
// --- com a opção sex e sorted especificada.
const nameBySexSorted = (sex) => locations.reduce((o, key) => ({ ...o,
  [key]: speciesByLocation[key].map((i) => ({
    [i]: animals.find((x) => x.name === i)
      .residents.filter((m) => m.sex === sex).map((z) => z.name).sort(),
  })) }), {});
// --- função de apoio, para diminuir a compelxidade da função principal.
const sexOptions = (options) => {
  if (options.sex) {
    return nameBySex(options.sex);
  }
  if (options.sorted) {
    return sortednameBySpeciesLocation;
  }
  return nameBySpeciesLocation;
};
//---
const getAnimalMap = (options) => {
  if (options === undefined || !options.includeNames) {
    return speciesByLocation;
  }
  if (options.sex && options.sorted === true) {
    return nameBySexSorted(options.sex);
  }
  return sexOptions(options);
};

module.exports = getAnimalMap;
