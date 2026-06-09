const {Schema}= require('mongoose');
const positionschema=new Schema({   
  product: String,
    name: String,
    qty: String,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});
    module.exports={positionschema};