'use strict';

angular.module('to-do-list').factory('Todo', ['$http',
  function($http) {

    //Requests list of user tasks from the server
    var getUserTasks = function(){
      return $http({
        method: 'GET',
        url: '/users/tasks'
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };

    //retrieves array of user challenges from the db
    var getUserChallenges = function(){
      return $http({
        method: 'GET',
        url: '/users/challenges'
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };

    //retrieves all available challenges from the db
    var getAllChallenges = function(){
      return $http({
        method: 'GET',
        url: '/challenges'
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };
    //Adds a challenge to user
    var putUserChallenge = function(id){
      return $http({
        method: 'PUT',
        url: '/users/challenges',
        data: {_id: id}
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };
    //Change
    var updateUserTask = function(taskId){
      return $http({
        method: 'PUT',
        url: '/users/tasks/update',
        data: {id: taskId}
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };

    var updateChallengeTask = function(challengeId, taskId){
      return $http({
        method: 'PUT',
        url: '/users/tasks/update',
        data: {_id: challengeId, id: taskId}
      })
      .then(function(response){
        return response;
      },
      function(err){
        console.log(err);
      });
    };

    // var removeUserTask = function(id){
    //  return $http({
    //     method: 'PUT',
    //     url: '/users/tasks/remove',
    //     data: {_id: id}
    //   })
    //   .then(function(response){
    //     return response;
    //   },
    //   function(err){
    //     console.log(err);
    //   });
    // };



    // Public API
    return {
      getUserTasks: getUserTasks,
      getUserChallenges: getUserChallenges,
      getAllChallenges: getAllChallenges,
      putUserChallenge: putUserChallenge,
      updateUserTask: updateUserTask,
      updateChallengeTask: updateChallengeTask
		};
	}
]);
