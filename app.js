const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoute = require('./routes/list');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/', todoRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('db connected');
});

app.listen(port, () => {
  console.log('application connected to port' + port);
});
