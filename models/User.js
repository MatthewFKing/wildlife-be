const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
  transporter: { type: Boolean, required: true, default: false },
  transporterId: { type: Schema.Types.ObjectId },
  notify: { type: Boolean, default: true }
});


//encrypting user password before saving to DB
User.pre('save', (next) => {
  const user = this;
  
  //put some salt on it
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    
    //hash the user password
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      
      //save the hash to the user's password.
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

//name
//email
//password
//admin yes/no
//transporter yes/no
//transporter id
//notify yes/no
