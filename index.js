const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost:transport/transport');

//Logging middleware
app.use(morgan('combined'));

//body parsing middleware
app.use(bodyParser.json({ type: '*/*' }));

//Using route file
//Create separate routes (transporter, pickup request, user, signup/signin)
const transporterRoute = require('./routes/transporter');
const pickupRoute = require('./routes/pickup');
const userRoute = require('./routes/user');
app.use('/transporter', transporterRoute);
app.use('/pickup', pickupRoute);
app.use('/user', userRoute);

//route for errors returned with next(err)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something went wrong', err);
});

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);