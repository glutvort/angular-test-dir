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
    .controller('singleContactController', ['$scope', 'contactsService','$location','$route', function($scope,contactsService,$location,$route){

        if (!contactsService.data.contacts || contactsService.data.contacts.length == 0){
            var promise = contactsService.methods.getContacts()
            promise.then(function(data){
                var tempArr = _.filter(data, function(item){
                    return item.id == parseInt($route.current.params.contactId)
                })

                $scope.model = tempArr[0]
            })
        } else {
            var tempArr = _.filter(contactsService.data.contacts, function(item){
                return item.id == parseInt($route.current.params.contactId)
            })

            $scope.model = tempArr[0]
        }


        $scope.save = contactsService.methods.saveContact
    }])