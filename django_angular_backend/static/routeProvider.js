angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'home.html',   controller: mainController}).
            when('/contacts', {templateUrl: 'list.html',   controller: contactsController}).
            otherwise({redirectTo: '/home'});
    }]);
