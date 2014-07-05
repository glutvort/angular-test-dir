app.config(['$routeProvider', function($routeProvider,mainController) {
    $routeProvider.
        when('/home', {templateUrl: "static/partials/home.html",   controller: mainController}).
        otherwise({redirectTo: '/home'});
}]);