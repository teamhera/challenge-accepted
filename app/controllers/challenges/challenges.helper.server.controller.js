'use strict';

var mongoose = require('mongoose'),
  passport = require('passport'),
  Challenges = mongoose.model('Challenge');

// this functions returns all documents in challenges table
exports.getChallenges = function(req,res){
  if(req.user){
    return Challenges.find({}, function(err, array) {
      res.send(array);
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// this function adds a single challenge document in challenges table
exports.addChallenges = function(req,res){
  if(req.user){
    var challenge = new Challenges(req.body);
    challenge.save();
    return res.send();
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// this function returns an array of challenges from challenges table
// request body should have at least one paramater that can match a challenge
exports.findChallenges = function(req,res){
  if(req.user){
    return Challenges.find(req.body, function(err, challenges) {
      res.send(challenges);
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};