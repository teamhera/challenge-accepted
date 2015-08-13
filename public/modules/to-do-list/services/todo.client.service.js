'use strict';

angular.module('to-do-list').factory('Todo', ['$http',
	function($http) {
		// Todo service logic
		// ...

// 		User = {
//   		username = string //primary key
//   		password = ###,
//   		rewards = ###,
//   		tasks = [],
//   		challenges = []
// }


		var getUserData = function(){
			//Get request for all user data
			//store that data in USERDATA object
			var userData = {username: 'bob', rewards: null,
											tasks: [{id: 12, description: 'Do your laundry', completed: false, rewards: null},{id: 16, description: 'Do the dishes', completed: false, rewards: null}],
											challenges: [{name: 'Weight Lifting', description: 'This is a weightlifting challenge', rewards: null, tasks: [{id: 22, description: 'Squat 10x', completed: false, rewards: null},{id: 5, description: 'Bench 10x', completed: false, rewards: null}]},
                       {name: 'Scuba Diving', description: 'This is a scuba diving challenge', rewards: null, tasks: [{id: 66, description: 'Wrestle a shark', completed: false, rewards: null},{id: 11, description: 'Touch a stingray', completed: false, rewards: null}]}
                      ]};
			return userData;
		};
		  // var getLinks = function(urls){ /// Use this pattern when DB is hookedup
    // 		return $http({
    //   		method: 'GET',
    //   		url: '/api/links/',
    //   		data: urls
    // 		})
    // 		.then(function(resp){
    //   		return resp.data;
    // 		});
  		// };



			//.then( ...  )


		var getChallengeData = function(){
			//get request
			return challengeData;
		};

		var getUserTasks = function(USERDATA){
			//get the tasks from the USERDATA object returned by
      return $http({
        method: 'GET',
        url: '/users/tasks/'
      })
      .then(function(response){
        console.log(response.data);
      },
      function(err){
        console.log(err);
      });
		};




		// Public API
		return {
			getUserData: getUserData,
      getUserTasks: getUserTasks
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
