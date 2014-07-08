app.controller('mainController',['$scope',function($scope) {
        $scope.user = {
            firstName:"Eugene",
            lastName: "Zakharov",
            email: "evgeniykpi@gmail.com",
            jabber: "evgeniy@jabber.me",
            birthDate: "22.01.1994",
            skype: "evgeniy_zakharov1",
            bio: "Something about me"
        };
    }])
    .controller('contactsController', ['$scope', 'contactsService', function($scope,contactsService){
            $scope.contactsModel = [];
            var promise = contactsService.methods.getContacts();
            promise.then(function(data){
                $scope.contactsModel = data;
                $scope.maxPage = parseInt($scope.contactsModel.length/$scope.paginations.n) + 1;
            });
            $scope.$root.$on("modelChangedFromSearch", function(event,data){
                $scope.paginations.p = 1;
                $scope.maxPage = parseInt(data.length/$scope.paginations.n) + 1;
            });
            $scope.searchValue = "";
            $scope.searchFilterPreviousValue = "";
            $scope.orderValue = 'first_name';
            $scope.reverse = false;
            $scope.options = [
                {name:"Name", value:"first_name"},
                {name:"Email", value:"'email'"},
                {name:"Cell phone", value:"phone_number"},
                {name:"Landline", value:"cellphone_number"}
            ];
            $scope.minPage = 1;
            $scope.paginations = {p:1,n:5};
            $scope.orderOpt = $scope.options[0];

    }])
    .controller('singleContactController', ['$scope', 'contactsService','$routeParams', function($scope,contactsService,$routeParams){

        var contactId = parseInt($routeParams.contactId);
        $scope.model = undefined;

        var promise = contactsService.methods.getSingleContact(contactId);
        promise.then(function(contactData){
            $scope.model = contactData;
            $scope.$root.$emit("modelLoaded", $scope.model.cellphone_number)
        })

        $scope.save = contactsService.methods.saveContact;
    }])