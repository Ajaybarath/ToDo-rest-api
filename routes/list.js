const express = require('express');
const router = express();
const Todo = require('../models/Todo');
const ttl = require('mongoose-ttl/lib/ttl');

router.get('/', (req, res) => {
  res.json({
    '/add': 'to add todo list',
    'instructions to add': {
      title: 'title of the todo',
      description: 'description of the todo',
      timer: 'time limit for the todo list to appear. Eg: 30s, 2m, 5h, 3d',
    },
    '/list': "to list all the todo's",
  });
});

router.get('/list', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.post('/add', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    timer: req.body.timer,
  });
  //   todo.ttl = req.body.timer;

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
