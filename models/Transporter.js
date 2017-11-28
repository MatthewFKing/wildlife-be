const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./Address');

const TransporterSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    address: Address,
    email: { type: String, required: true, trim: true },
    preferredContact: { type: String, required: true },
    completedPickups: { type: Number },
    willingToRescue: { type: Boolean, required: true }
});

//Export the model
const Transporter = mongoose.model('Transporter', TransporterSchema);
module.exports = Transporter;

//First and Last Name
//Email + Password
//Phone Number
//Address
//Preferred Contact Method
//Preferred Contact Hours
//Pickup Range
//Completed pickups
//Notifications on or off
//Willingness to capture or rescue
