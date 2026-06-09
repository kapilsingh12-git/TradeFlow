const { model } = require('mongoose');


const { positionschema } = require('../schemas/positionschema');

const positionmodel = new model("position", positionschema);

module.exports = { positionmodel };
