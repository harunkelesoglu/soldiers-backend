angular.module('buyerController',['ngMap'])
       .controller('buyerController',function($scope,$state,$window,dataProvider,NgMap){
           const user = JSON.parse($window.localStorage.getItem('user'));
           
           //render user information 
           $scope.googleMapsUrl = "http://maps.google.com/maps/api/js?key=AIzaSyCr0NW4ERXAoCLB7i15PD7lSDw4yz59nno";
           $scope.lat = user.location.lat;
           $scope.lng = user.location.lng;
           $scope.user = user.name+" "+user.surname;
           $scope.zoom = 12;
           $scope.order = user.orders[0]
            //seller location information for render the maps
           dataProvider.getAllSeller()
                        .then((res) => {
                            debugger;
                            if(res.data){
                                $scope.sellers = res.data;
                            }else{
                                console.log("çevrenizde hamur işlerinden anlayan yok :)");
                            }
                        })
                        .catch(e => console.error(e));

            //click event functions
            $scope.logout = function(){
                $window.localStorage.clear();
                $state.go('root');
            }

              
           
       })