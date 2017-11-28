const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedPickup = new Schema({
  timeRequested: { type: Date, default: Date.now },
  timeCompleted: { type: Date, default: Date.now },
  pickupDescription: { type: String },
  finderName: { type: String },
  transporterName: { type: String },
  transporterID: { type: Schema.Types.ObjectId },
  
});

//Completed Pickups
//Desc
//Time/Date
//quantity
//miles driven
//Transporter
//contact name + number
