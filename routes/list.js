const express = require('express');
const router = express();
const Todo = require('../models/Todo');

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

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
