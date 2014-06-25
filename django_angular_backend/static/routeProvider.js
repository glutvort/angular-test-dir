angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'home.html',   controller: mainController}).
            when('/contacts', {templateUrl: 'list.html',   controller: contactsController}).
            when('/contacts/:contactId', {templateUrl: 'contact.html',   controller: singleContactController}).
            otherwise({redirectTo: '/home'});
    }]);
