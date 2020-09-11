const mongoose = require('mongoose');
const mongoose_ttl = require('mongoose-ttl');
const ttl = require('mongoose-ttl/lib/ttl');

let TodoSchema = mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
  },
  { timesStamps: true }
);

TodoSchema.plugin(ttl, { ttl: TodoSchema.timer, reap: false });

module.exports = mongoose.model('Todo', TodoSchema);
