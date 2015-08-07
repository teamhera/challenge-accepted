var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  reward: {
    type: String,
    default: ''
  },
  taskSchedule:{
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
  
});

