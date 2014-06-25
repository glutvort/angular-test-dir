function singleContactController($scope,$http){
    $scope.model = $scope.$root.currentContact
    $scope.save = function(){
        $http({
            url: 'http://127.0.0.1:8000/api/v1/contact/'+$scope.contactId,
            method: 'PUT',
            data: $scope.model
        }).success(function(){
            alert("Contact updated")
        });
    }
}