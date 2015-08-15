'use strict';

angular.module('to-do-list').controller('UserToDoController', ['$scope', 'Authentication', 'Todo',
//Add ToDo Service
	function($scope, Authentication, Todo) { // Add ToDo Service
		// Controller Logic
		// ...
    //we're having an issue with injecting the ToDo Service, getting an error - 08/07 - Friday

    // $scope.userData = {};





    //calls Todo.getUserTasks then console logs the return , or console logs the error
    $scope.getUserTasks = function(){
      Todo.getUserTasks()
      .then(function(ret){
        console.log(ret);
        $scope.userData = ret;
      }, function(err){
        console.log(err);
      });
     };

     //calls getUserTasks for testing.  Should console log results.
     $scope.getUserTasks();



     

    // $scope.allChallenges = getAllChallenges(); // Gives us whole challenges array
    /////////////
    $scope.authentication = Authentication;
    //$scope.tasks = $scope.getUserData(); // For when we need to split into services
    $scope.tasks = [{id: 12, description: 'Do your laundry', completed: false, rewards: null},{id: 16, description: 'Do the dishes', completed: false, rewards: null}];
	  $scope.userChallenges =[{name: 'Weight Lifting', description: 'This is a weightlifting challenge', rewards: null, tasks: [{id: 22, description: 'Squat 10x', completed: false, rewards: null},{id: 5, description: 'Bench 10x', completed: false, rewards: null}]},
                        {name: 'Scuba Diving', description: 'This is a scuba diving challenge', rewards: null, tasks: [{id: 66, description: 'Wrestle a shark', completed: false, rewards: null},{id: 11, description: 'Touch a stingray', completed: false, rewards: null}]}];
    $scope.allChallenges = [{name: 'Awesome Diet', description: 'This is a dieting challenge', rewards: null, tasks: [{id: 22, description: 'Diet 1x', completed: false, rewards: null},{id: 5, description: 'Eat 47 apples', completed: false, rewards: null}]},
                        {name: 'Rock Climbing', description: 'This is a rock climbing challenge', rewards: null, tasks: [{id: 66, description: 'Climb 1x', completed: false, rewards: null},{id: 11, description: 'Climb 100x', completed: false, rewards: null}]}];
    $scope.addChallenge = function(index){
      console.log($scope.allChallenges[index]);
      $scope.userChallenges.push($scope.allChallenges[index]);
    };
    $scope.addUserTask = function(){
     var data = document.getElementById('taskData').value;
     var task = {id: 11, description: data, completed: false, rewards: null};
     $scope.tasks.push(task);
     document.getElementById('taskData').value = '';
    };
  }
]);




/* DATA MODEL
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
  tasks = [task go here],
  challenges = [challenge go here]
}

AllChalenges = [ {challenge1}, {challenge2} ]
*/
