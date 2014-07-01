app.config(['$routeProvider', function($routeProvider,mainController,conttactsController) {
        $routeProvider.
            when('/home', {templateUrl: "static/partials/home.html",   controller: mainController}).
            when('/contacts', {templateUrl: "static/partials/list.html",   controller: conttactsController}).
            otherwise({redirectTo: '/home'});
    }]);
