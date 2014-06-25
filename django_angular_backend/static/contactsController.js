function contactsController($scope,$http){
    $http({method:"GET", url: 'http://127.0.0.1:8000/api/v1/contact'}).success(function(data){
        $scope.contactsModel = data.objects
    })
    $scope.openContactDetails = function(contact){
        window.location.href = '#/contacts/'+contact.id
        $scope.$root.currentContact = contact
    }
}