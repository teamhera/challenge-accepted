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
    //calls Todo.getUserChallenges which returns the array of challenges attached to the user and updates allChallenges
    $scope.getUserChallenges = function(){
      Todo.getUserChallenges()
      .then(function(res){
        console.log(res);
        //sets scope.userChallenges to the array of challenges the user is involved in
        $scope.userChallenges = res.data;
      }, function(err){
        console.log(err);
      })
      .then(function(res){
        //Returns array of all challenges available to user
         Todo.getAllChallenges()
        .then(function(res){
          console.log(res);
          //filters for challenges already attached to user
          $scope.allChallenges = [];
          for (var i = 0; i < res.data.length; i++){
            var toPush = true;
            for(var j = 0; j < $scope.userChallenges.length; j++){
              if (res.data[i]._id === $scope.userChallenges[j]._id){
                toPush = false;
              }
            }
            if(toPush){
              console.log('We pushed!');
              $scope.allChallenges.push(res.data[i]);
              console.log($scope.allChallenges);
            }
          }
        }, function(err){
          console.log(err);
        });
      });
     };


    $scope.addChallenge = function(index){
      Todo.putUserChallenge($scope.allChallenges[index]._id)
      .then(function(res){
        $scope.getUserChallenges();
      }, function(err){
        console.log(err);
      });
     };

    $scope.addUserTask = function(){
      var data = document.getElementById('taskData').value;
      var task = {description: data, completed: false, rewards: null};
      Todo.putUserTask(task)
      .then(function(res){
        document.getElementById('taskData').value = '';
        $scope.getUserTasks();
      }, function(err){
        console.log(err);
      });
     };

    $scope.completeUserTask = function(index){
      console.log('completeUserTask, line 81 controller');
      console.log($scope.tasks);
      console.log($scope.tasks[index]);
      Todo.updateUserTask($scope.tasks[index].id)
      .then(function(res){
        $scope.getUserTasks();
      },function(err){
        console.log(err);
      });
    };

    $scope.completeChallengeTask = function(index){
      console.log('completeChallengeTask, line 91 controller');
      console.log(this);
      Todo.updateChallengeTask(this._id, this.tasks[index].id)
      .then(function(res){
        $scope.getUserChallenges();
      },function(err){
        console.log(err);
      });
    };

    //  $scope.removeTask = function(index){

    //  };

    //Initialization function for getting initial user data
    $scope.init = function(){
     $scope.getUserTasks();
     $scope.getUserChallenges();
    };

    $scope.init();
  }
]);
