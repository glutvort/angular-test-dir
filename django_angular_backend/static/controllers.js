app.controller('mainController',['$scope',function($scope) {
        $scope.user = {
            firstName:"Eugene",
            lastName: "Zakharov",
            email: "evgeniykpi@gmail.com",
            jabber: "evgeniy@jabber.me",
            birthDate: "22.01.1994",
            skype: "evgeniy_zakharov1",
            bio: "Something about me"
        }
    }])
    .controller('contactsController', ['$scope', 'contactsService', function($scope,contactsService){
            $scope.contactsModel = []
            var promise = contactsService.methods.getContacts()
            promise.then(function(data){
                $scope.contactsModel = data
            })
    }])