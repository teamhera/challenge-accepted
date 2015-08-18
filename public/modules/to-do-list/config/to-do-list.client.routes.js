'use strict';

//Setting up route
angular.module('to-do-list').config(['$stateProvider',
	function($stateProvider) {
		// To do list state routing
		$stateProvider.
		state('user-to-do', {
			url: '/user-to-do',
			templateUrl: 'modules/to-do-list/views/user-to-do.client.view.html'
		}).
    state('challenge-create', {
      url: '/challenge-create',
      templateUrl: 'modules/to-do-list/views/challenge-create.client.view.html'
    });
	}
]);
