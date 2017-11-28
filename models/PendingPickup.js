const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./Address');

const PickupSchema = new Schema({
  timeRequested: { type: Date, default: Date.now },
  contactName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  animalDescription: {type: String, required: true },
  currentLocation: Address,
  destination: Address,
  rescue: { type: Boolean, required: true },
  additionalNote: { type: String }
});

const Pickup = mongoose.model('Pickup', PickupSchema);
module.exports = Pickup;

//Time + Date
//Name of Finder
//Phone of Finder
//Animal and description of condition
//Current Location
//Destination
//Need for capture/rescue
//Additional recomendations for items to bring
//Additional Notes
//Distance from the user being contacted