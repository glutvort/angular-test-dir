angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'home.html',   controller: mainController}).
            when('/contacts', {templateUrl: 'list.html',   controller: contactsController}).
            when('/contacts/:contactId', {templateUrl: 'contact.html',   controller: singleContactController}).
            otherwise({redirectTo: '/home'});
    }]).filter('usaNumber', function () {
        return function (item) {
            if(item[0]=="+" && item[1]=="1") {
                item = item + " (USA)"
            }
            return item
        };
    }).filter('paginationFilter', function () {
        return function (items,pager) {
            var result = [];

            angular.forEach(items,function(item,index){
                if ((index+1) > pager.n*(pager.p-1) && (index+1) <= pager.n*pager.p)
                    result.push(item);
            })

            return result;
        };
    });
