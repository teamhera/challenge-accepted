'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Task = mongoose.model('Task');

// get all user tasks
exports.getUserTasks = function(req,res){
  if(req.user){
    var user = req.body;
    return User.find({username: user.username}, function(err, item){
      res.send(item.tasks);
    });
  } else {

    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// add task to user tasks array
exports.putUserTasks = function(req,res){
  if(req.user){
    var task = new Task(req.body);
    return User.find({username: req.user.username}, function(err, item){
      item.tasks.push(task);
      task.save();
      item.save();
      res.send();
    });
  } else {

    return res.status(400).send({
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

    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// TODO: create utility.js, add function for user not signed in