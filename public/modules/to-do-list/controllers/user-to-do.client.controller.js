'use strict';

angular.module('to-do-list').controller('UserToDoController', ['$scope', 'Authentication', 'Todo',

  function($scope, Authentication, Todo) {
    // Controller Logic
    $scope.authentication = Authentication;



    //calls Todo.getUserTasks which returns the users tasks
    $scope.getUserTasks = function(){
      Todo.getUserTasks()
      .then(function(res){
        console.log(res);
        //sets scope.tasks to the array of user tasks
        $scope.tasks = res.data;
      }, function(err){
        console.log(err);
      });
     };
    //calls Todo.getUserChallenges which returns the array of challenges attached to the user
    $scope.getUserChallenges = function(){
      Todo.getUserChallenges()
      .then(function(res){
        console.log(res);
        //sets scope.userChallenges to the array of challenges the user is involved in
        $scope.userChallenges = res.data;
      }, function(err){
        console.log(err);
      });
     };

     //calls Todo.getAllChallenges which returns the array of all challenges available
    $scope.getAllChallenges = function(){
      Todo.getAllChallenges()
      .then(function(res){
        console.log(res);
        //sets scope.allrChallenges to the array of all challenges available
        $scope.allChallenges = res.data;
      }, function(err){
        console.log(err);
      });
     };


    $scope.addChallenge = function(index){
      console.log($scope.allChallenges[index]._id);
      Todo.putUserChallenge($scope.allChallenges[index]._id)
      .then(function(res){
        $scope.getUserChallenges();
      }, function(err){
        console.log(err);
      });
     };

    // $scope.addChallenge = function(index){
    //   console.log($scope.allChallenges[index]);
    //   $scope.userChallenges.push($scope.allChallenges[index]);
    // };
    $scope.addUserTask = function(){
     var data = document.getElementById('taskData').value;
     var task = {id: 11, description: data, completed: false, rewards: null};
     $scope.tasks.push(task);
     document.getElementById('taskData').value = '';
    };

    //Initialization function for getting initial user data
    $scope.init = function(){
     $scope.getUserTasks();
     $scope.getUserChallenges();
     $scope.getAllChallenges();
    };

    $scope.init();
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
