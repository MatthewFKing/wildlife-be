//Base path is /pickup
const express = require('express');
const router = express.Router();
const Pickup = require('../models/PendingPickup');

//Get a list of all the pickups
//Change to only pending/active pickups
router.get('/', (req, res, next) => {
  Pickup.find()
    .exec((err, pickups) => {
      if (err) return next(err);
      res.status(201);
      res.json(pickups);
    });
});

//Create a new pickup
router.post('/', (req, res, next) => {
  const newPickup = new Pickup(req.body);
  newPickup.save((err, pickup) => {
    if (err) return next(err);
    res.status(201);
    res.json(pickup);
  });
});

//Update pickup
router.put('/', (req, res, next) => {
  Pickup.findById(req.body.id, (err, pickup) => {
    if (err) return next(err);
    pickup.update(req.body, (err, updatedPickup) => {
      if (err) return next(err);
      res.status(201);
      res.json(updatedPickup);
    });
  });
});

//Delete Pickup, Change to :id params, delete doesnt accept req.body
router.delete('/:id', (req, res, next) => {
  Pickup.findById(req.params.id).remove((err, pickup) => {
    if (err) return next(err);
    res.status(201);
    res.json(pickup);
  });
});

module.exports = router;