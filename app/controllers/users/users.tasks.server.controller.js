'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Task = mongoose.model('Task');

// get all user tasks
exports.getUserTasks = function(req,res){
  if(req.user){
    return User.find({_id: req.user._id}, function(err, item){
      res.send(item[0].tasks);
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
    return User.find({_id: req.user._id}, function(err, item){
      item[0].tasks.push(task);
      task.save();
      item[0].save();
      res.send();
    });
  } else {

    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// toggles completion state of a task in user's task array
exports.toggleUserTask = function(req,res){ //req.body.taskId   req.body.challengeId
  if(req.user){
    return User.find({_id: req.user._id}, function(err, item){
      var taskArray;
      if(req.body.challengeId){
        item[0].challenges.forEach(function(challenge){
          if(challenge._id.toString() === req.body.challengeId ){
            taskArray = challenge.tasks;
          }
        });
      } else {
        taskArray = item[0].tasks;
      }
      taskArray.forEach(function(task){
        if(task._id.toString() === req.body.taskId){
          task.completed = !task.completed;
        }
      });
      item[0].save();
      res.send();
    });
  } else {
    return res.status(400).send({
      message: 'User is not signed in'
    });
  }
};

// remove task from user tasks array
exports.removeUserTasks = function(req,res){
  if(req.user){
    return User.find({_id: req.user._id}, function(err, item){
      item[0].tasks = item[0].tasks.filter(function(element){
        return element._id.toString() !== req.body._id;
      });
      item[0].save();
    });
  }
};
// replace db user tasks array with array received from client request
// exports.reportUserTasks = function(req,res){
//   if(req.user){
//     var user = req.body;
//     return User.find({_id: req.user._id}, function(err, item){
//       item[0].tasks = user.tasks;
//       item[0].save();
//       res.send();
//     });
//   } else {

//     return res.status(400).send({
//       message: 'User is not signed in'
//     });
//   }
// };

// TODO: create utility.js, add function for user not signed in