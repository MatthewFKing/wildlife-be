const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config');

//use JWT to create a token for the user
const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  //Check to make sure both the email and password were provided
  if(!email || !password) {
    return res.status(422).send({ error: "You must provide both an email and a password" });
  }
  
  //See if there is an existing user with the same email
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    
    //If one exists then return an error
    if(existingUser) {
      return res.status(422).send({ error: "Email is already in use " });
    }
    
    //If email does not already exists then create a new User with the information from the body.
    const user = new User({
      //Add the rest of the needed information for Schema
      email: email,
      password: password
    });
    
    //save the user
    user.save(err => {
      if (err) return next(err);
      
      //return the token created for that user.
      res.json({ token: tokenForUser(user) });
    });
  });
};