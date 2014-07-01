app.factory('contactsService', ['$http', '$q',
        function ($http, $q) {
            var svcData = {
                contacts:{}
            }


            var getContacts = function(){
                var deferred = $q.defer();

                $http({method:"GET", url: 'http://127.0.0.1:8000/api/v1/contact'}).success(function(data){
                    deferred.resolve(data.objects)
                }).error(function(){
                    deferred.reject()
                })
                 return deferred.promise
            }


            return  {
                data: svcData,
                methods: {
                    getContacts: getContacts
                }
            }
        }])