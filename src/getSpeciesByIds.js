const data = require('../data/zoo_data');

const getSpeciesByIds = (ids) => data.species.find((specie) => specie.id === ids);



module.exports = getSpeciesByIds;
