const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoute = require('./routes/list');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

app.use('/', todoRoute);

app.get('/home', (req, res) => {
  res.send('This is home page use /list to add a todo and /add to add a todo');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('db connected');
});

app.listen(process.env.PORT);
