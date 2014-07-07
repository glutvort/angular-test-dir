app.factory('contactsService', ['$http', '$q',
        function ($http, $q) {

            var getContacts = function(){
                var deferred = $q.defer();

                $http({method:"GET", url: location.origin+'/api/v1/contact'}).success(function(data){
                    deferred.resolve(data.objects);
                }).error(function(){
                    deferred.reject();
                })
                 return deferred.promise;
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
                    url: location.origin+'/api/v1/contact/'+contact.id,
                    method: 'PUT',
                    data: contact
                }).success(function(){
                    alert("Contact updated");
                });
            }

            return  {
                methods: {
                    getContacts: getContacts,
                    saveContact: saveContact,
                    getSingleContact:getSingleContact
                }
            }
        }])