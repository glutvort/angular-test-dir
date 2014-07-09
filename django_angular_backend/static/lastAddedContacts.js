app.directive('lastAddedContacts',['contactsService','$filter', function(contactsService,$filter) {
    return {
        restrict:'AE',
        templateUrl:"static/partials/lastAdded.html",
        scope:true,
        controller: function($scope){
            var promise = contactsService.methods.getContacts();
            promise.then(function(contactData){
                $scope.filteredData = $filter("orderBy")(contactData,"date_created",false);
                $scope.lastAddedContact = $scope.filteredData.slice($scope.filteredData.length-3,$scope.filteredData.length)
            })
        },
        link: function(scope, elm, attrs) {

        }
    };
}]);