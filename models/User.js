const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./Address');

const UserSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    address: Address,
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    preferredContact: { type: String, required: true },
    completedPickups: { type: Number }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

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
