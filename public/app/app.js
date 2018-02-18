const app = angular.module('hackathon',['routes'])
       
    app.factory('dataProvider',function($http){
            const services = {}
                services.Auth = function(username){
                    return $http.post('/api/authenticate',{"username":username})
                }
                services.getAllSeller = function(){
                    return $http.post('/api/seller/getAllSeller');
                }
            return services;
        });


