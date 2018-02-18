angular.module('hackathon',['routes'])
        .factory('dataProvider',function($http){
            const services = {}
                services.Auth = function(username){
                    debugger;
                return $http.post('/api/authenticate',{"username":username})
                }
                services.getAllSeller = function(){
                    return $http.post('/api/seller/getAllSeller');
                }
            return services;
        });



