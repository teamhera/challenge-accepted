'use strict';

angular.module('to-do-list').controller('UserToDoController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Controller Logic
		// ...
    // $scope.getTasks = function(){
    //   return {};
    // };
    $scope.authentication = Authentication;
    $scope.tasks = [{id: 12, description: 'Do your laundry', completed: false, rewards: null},{id: 16, description: 'Do the dishes', completed: false, rewards: null}];
	  $scope.challenges =[{name: 'Weight Lifting', description: 'This is a weightlifting challenge', rewards: null, tasks: [{id: 22, description: 'Squat 10x', completed: false, rewards: null},{id: 5, description: 'Bench 10x', completed: false, rewards: null}]},
                        {name: 'Scuba Diving', description: 'This is a scuba diving challenge', rewards: null, tasks: [{id: 66, description: 'Wrestle a shark', completed: false, rewards: null},{id: 11, description: 'Touch a stingray', completed: false, rewards: null}]}];
  }
]);


/*
tasks = {
  id = int,
  description = string,
  completed = true/false,
  reward = string (can be null)
}

challenge = {
  name = string,
  description = string,
  reward = string,
  tasks = [

  ]
}

User = {
  username = string //primary key
  password = ###,
  rewards = ###,
  tasks = [],
  challenges = []
}
*/
