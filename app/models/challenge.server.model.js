var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: ''
  },
  reward: {
    type: String,
    default: ''
  },
  tasks: {
    type: Array,
    default: []
  }
});

mongoose.model('Challenge', ChallengeSchema);