app.factory('contactsService', ['$http', '$q',
        function ($http, $q) {
            var svcData = {
                contacts:[]
            }


            var getContacts = function(){
                var deferred = $q.defer();

                $http({method:"GET", url: 'http://127.0.0.1:8000/api/v1/contact'}).success(function(data){
                    svcData.contacts = data.objects
                    deferred.resolve(data.objects)
                }).error(function(){
                    deferred.reject()
                })
                 return deferred.promise
            }

            var getSingleContact = function(id){
                var deferred = $q.defer();

                $http({method:"GET", url: location.origin+'/api/v1/contact/' + id}).success(function(contactData){
                    deferred.resolve(contactData);
                }).error(function(){
                    deferred.reject();
                });

                return deferred.promise;
            }

            var saveContact = function(contact){
                $http({
                    url: 'http://127.0.0.1:8000/api/v1/contact/'+contact.id,
                    method: 'PUT',
                    data: contact
                }).success(function(){
                    alert("Contact updated")
                });
            }
            return  {
                data: svcData,
                methods: {
                    getContacts: getContacts,
                    saveContact: saveContact,
                    getSingleContact:getSingleContact
                }
            }
        }])