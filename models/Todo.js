const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  timer: {
    type: Number,
    required: true,
    default: Date.now,
    index: {
      expiresAt: '',
    },
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
