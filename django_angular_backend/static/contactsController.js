function contactsController($scope,$http){
    $scope.searchValue = ""
    $scope.orderValue = 'first_name'
    $scope.reverse = false
    $scope.options = [
        {name:"Name", value:"first_name"},
        {name:"Email", value:"'email'"},
        {name:"Cell phone", value:"phone_number"},
        {name:"Landline", value:"cellphone_number"}
    ]
    $scope.minPage = 1
    $scope.paginations = {p:1,n:10}
    $scope.orderOpt = $scope.options[0]
    $http({method:"GET", url: 'http://127.0.0.1:8000/api/v1/contact'}).success(function(data){
        $scope.contactsModel = data.objects
        $scope.maxPage = parseInt($scope.contactsModel.length/$scope.paginations.n) + 1
    })
    $scope.openContactDetails = function(contact){
        window.location.href = '#/contacts/'+contact.id
        $scope.$root.currentContact = contact
    }
}
