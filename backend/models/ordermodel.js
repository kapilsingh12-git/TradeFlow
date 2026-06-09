const { model } = require('mongoose');

const {orderschema } = require('../schemas/orderschema');

const ordermodel = new model("order", orderschema);

module.exports = { ordermodel };
