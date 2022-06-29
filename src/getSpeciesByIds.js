const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((i) => data.species.find((specie) => specie.id === i));

module.exports = getSpeciesByIds;
