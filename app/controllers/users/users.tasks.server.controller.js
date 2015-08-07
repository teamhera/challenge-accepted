'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

// get all user tasks
exports.getUserTasks = function(req,res){
  if(req.user){
    var user = req.body;
    return User.find({username: user.username}, function(err, item){
      res.send(item.tasks);
    });
  } else {
    res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// add task to user tasks array
exports.putUserTasks = function(req,res){
  if(req.user){
    var user = req.body;
    return User.find({username: user.username}, function(err, item){
      item.tasks.push(user.task);
      item.save();
      res.send();
    });
  } else {
    res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// replace db user tasks array with array received from client request
exports.reportUserTasks = function(req,res){
  if(req.user){
    var user = req.body;
    return User.find({username: user.username}, function(err, item){
      item.tasks = user.tasks;
      item.save();
      res.send();
    });
  } else {
    res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// TODO: create utility.js, add function for user not signed in