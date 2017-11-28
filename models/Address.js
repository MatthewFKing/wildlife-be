const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zip: { type: Number, required: true, trim: true }
});

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;

//Street
//City
//State
//Zip
//Coordinates?