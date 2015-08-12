'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Challenge = mongoose.model('Challenge');


// get all challenges from user -get
exports.getAllUserChallenges = function(req, res){
  if(req.user){
    var user = req.body;
    return User.find({username: user.username}, function(err, item){
      res.send(item.challenges);
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
    return Challenge.find({name: req.body.name}, function(err,item){
      User.find({username: req.user.username}, function(err, user){
        user.challenges.push(item);
        user.save();
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
exports.removeUserChallenge = function(req, res){
  if(req.user){
    return User.find({username: req.user.username}, function(err, user){
      user.challenges = user.challenges.filter(function(challenge){
        return challenge.name !== req.body.name;
      });
      user.save();
      res.send();
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// replace db user challenge array with array received from client request -report
exports.updateChallenges = function(req, res){
  if(req.user){
    var challenges = req.body.challenges;
    return User.find({username: req.user.username}, function(err, item){
      item.challenges = challenges;
      item.save();
      res.send();
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};
>>>>>>> added routes and helper functions for querying the database for users and challenges
