
angular.module('dataProviderService',[])
        .factory('dataProvider',function($http){
            const services = {}
                services.Auth = function(username){
                    return $http.post('/api/authenticate',{"username":username})
                }
                services.getAllSeller = function(){
                    return $http.post('/api/seller/getAllSeller');
                }
                services.addOrder = function(order){
                    return $http.post('/api/seller/addOrder',order);
                }
                services.addMyOrders = function(order){
                    return $http.post('/api/buyer/addOrder',order);
                }
                services.getMyOrders = function(buyer){
                    return $http.post('/api/seller/Orders',{"username":buyer})
                }
            return services;
        });

            