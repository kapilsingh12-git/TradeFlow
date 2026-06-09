const { model } = require('mongoose');

const { holdingschema } = require('../schemas/holdingschema');

const holdingmodel = new model("holding", holdingschema);

module.exports = { holdingmodel };
