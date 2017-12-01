const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get a list of all users
router.get('/', (req, res, next) => {
  User.find()
    .exec((err, users) => {
      if (err) return next(err);
      res.status(201);
      res.json(users);
    });
});

//Get a specific user by using ID
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json(user);
  });
});

//Create a new user.. Will be replaced with authentication
router.post('/', (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json(user);
  });
});

router.post('/bulk', (req, res, next) => {
  const bulkUsers = req.body;
  User.insertMany(bulkUsers, (err, users) => {
    if (err) return next(err);
    res.json(users);
  });
});

//Update an existing user
router.put('/', (req, res, next) => {
  User.findById(req.body.id).update(req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.status(201);
    res.json(updatedUser);
  });
});

//Delete a user
router.delete('/:id', (req, res, next) => {
  User.findById(req.params.id).remove((err, user) => {
    if (err) return next(err);
    res.status(201);
    res.json(user);
  });
});

module.exports = router;
