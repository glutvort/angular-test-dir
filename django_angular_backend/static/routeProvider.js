angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'home.html',   controller: mainController}).
            otherwise({redirectTo: '/home'});
    }]);
