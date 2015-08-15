'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Challenge = mongoose.model('Challenge');


// get all challenges from user -get
exports.getAllUserChallenges = function(req, res){
  if(req.user){
    return User.find({_id: req.user._id}, function(err, item){
      res.send(item[0].challenges);
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// add challenge to user challenges array -subscribe
exports.addChallenges = function(req, res){
  if(req.user){
    return User.find({_id: req.user._id}, function(err, user){
      Challenge.find({_id: req.body._id}, function(err,item){
        console.log(req);
        user[0].challenges.push(item[0]);
        user[0].save();
        res.send();
      });
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// remove challenge from user challenges array -unsubscribe
exports.removeUserChallenges = function(req, res){
  if(req.user){
    return User.find({_id: req.user._id}, function(err, user){
      user[0].challenges = user[0].challenges.filter(function(challenge){
        if(challenge){
          return challenge._id.toString() !== req.body._id;
        } else {
          return false;
        }
      });
      user[0].save();
      res.send();
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// replace db user challenge array with array received from client request -report
// exports.updateChallenges = function(req, res){
//   if(req.user){
//     var challenges = req.body.challenges;
//     return User.find({_id: req.user._id}, function(err, item){
//       item.challenges = challenges;
//       item.save();
//       res.send();
//     });
//   } else {
//     return res.status(400).send({
//       message: 'User is not signed in'
//     });
//   }
// };
