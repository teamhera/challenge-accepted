'use strict';


angular.module('core').controller('HomeController', ['$scope', '$location','Authentication',
  function($scope, $location, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    //this function ensures redirect to /user-to-do after login
    $scope.$watch(function(){return $location.path();}, function(next,current){
      if(Authentication.user && current === '/'){
        $location.path('/user-to-do');
      }
    });
  }
]);