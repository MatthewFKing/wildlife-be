const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(morgan('combined'));
app.use(bodyParser.json());

const routes = require('./router.js');
app.use('/', routes);

app.listen(process.env.PORT);