app.config(['$routeProvider', function($routeProvider,mainController,conttactsController,singleContactController) {
        $routeProvider.
            when('/home', {templateUrl: "static/partials/home.html",   controller: mainController}).
            when('/contacts', {templateUrl: "static/partials/list.html",   controller: conttactsController}).
            when('/contacts/:contactId', {templateUrl: "static/partials/contact.html",   controller: singleContactController}).
            otherwise({redirectTo: '/home'});
    }]);
