'use strict';

angular.module('to-do-list').factory('Todo', ['$http',
  function($http) {
    // Todo service logic
    // ...

//    User = {
//      username = string //primary key
//      password = ###,
//      rewards = ###,
//      tasks = [],
//      challenges = []
// }



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


    // /users/challenges PUT add challenge to challenges for user


    // Public API
    return {
      getUserTasks: getUserTasks,
      getUserChallenges: getUserChallenges,
      getAllChallenges: getAllChallenges,
      putUserChallenge: putUserChallenge
		};
	}
]);




/*
 $scope.tasks = [{id: 12, description: 'Do your laundry', completed: false, rewards: null},{id: 16, description: 'Do the dishes', completed: false, rewards: null}];
	  $scope.userChallenges =[{name: 'Weight Lifting', description: 'This is a weightlifting challenge', rewards: null, tasks: [{id: 22, description: 'Squat 10x', completed: false, rewards: null},{id: 5, description: 'Bench 10x', completed: false, rewards: null}]},
                        {name: 'Scuba Diving', description: 'This is a scuba diving challenge', rewards: null, tasks: [{id: 66, description: 'Wrestle a shark', completed: false, rewards: null},{id: 11, description: 'Touch a stingray', completed: false, rewards: null}]}];
    $scope.allChallenges = [{name: 'Awesome Diet', description: 'This is a dieting challenge', rewards: null, tasks: [{id: 22, description: 'Diet 1x', completed: false, rewards: null},{id: 5, description: 'Eat 47 apples', completed: false, rewards: null}]},
                        {name: 'Rock Climbing', description: 'This is a rock climbing challenge', rewards: null, tasks: [{id: 66, description: 'Climb 1x', completed: false, rewards: null},{id: 11, description: 'Climb 100x', completed: false, rewards: null}]}];

*/
