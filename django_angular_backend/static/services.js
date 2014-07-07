app.factory('contactsService', ['$http', '$q',
        function ($http, $q) {

            var getContacts = function(){
                var deferred = $q.defer();

                $http({method:"GET", url: location.origin+'/api/v1/contact'}).success(function(data){
                    deferred.resolve(data.objects)
                }).error(function(){
                    deferred.reject()
                })
                 return deferred.promise
            }


            return  {
                methods: {
                    getContacts: getContacts
                }
            }
        }])