// Base route is /transporter
const express = require('express');
const router = express.Router();
const Transporter = require('../models/Transporter');

//Get list of all transporters
router.get('/', (req, res, next) => {
  Transporter.find()
    .exec((err, transporters) => {
      if (err) return next(err);
      res.json(transporters);
    });
});

//Create a new Transporter
router.post('/', (req, res, next) => {
  const newTransporter = new Transporter(req.body);
  newTransporter.save((err, transporter) => {
    if (err) return next(err);
    res.status(201);
    res.json(transporter);
  });
});

//Update existing transporter
router.put('/', (req, res, next) => {
  Transporter.findById(req.body.id, (err, transporter) => {
    if (err) return next(err);
      transporter.update(req.body, (err, updatedTransporter) => {
        if (err) return next(err);
        res.status(201);
        res.json(updatedTransporter);
      });
  });
});

//Remove existing transporter, change to :id params, delete doesnt accept req.body
router.delete('/:id', (req, res, next) => {
  Transporter.findById(req.params.id).remove((err, transporter) => {
    if (err) return next(err);
    res.status(201);
    res.json(transporter);
  });
});

module.exports = router;