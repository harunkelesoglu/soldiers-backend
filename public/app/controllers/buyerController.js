angular.module('buyerController',['ngMap','dataProviderService'])
       .controller('buyerController',function($scope,$state,$window,dataProvider,NgMap){
           const user = JSON.parse($window.localStorage.getItem('user'));
           
           //render user information 
           $scope.googleMapsUrl = "http://maps.google.com/maps/api/js?key=AIzaSyCr0NW4ERXAoCLB7i15PD7lSDw4yz59nno";
           $scope.location = user.location;
           $scope.user = user.name+" "+user.surname;
           $scope.zoom = 12;
           $scope.orders = user.orders;
    
            //seller information for render the maps
           dataProvider.getAllSeller()
                        .then((res) => {
                            if(res.data){
                                $scope.sellers = res.data;
                            }else{
                                console.log("çevrenizde hamur işlerinden anlayan yok :)");
                            }
                        })
                        .catch(e => console.error(e));

            $scope.showDetail = function(seller){
                
                angular.element(`#${seller}-modal`)
                        .modal('show');
                angular.element(".rating")
                        .rating({
                            initialRating: 3,
                            maxRating: 5
                        })
                
            }
            $scope.order = function(seller){
                angular.element(`#${seller.username}-order-btn`).html("Sipariş verildi<i class='check circle outline icon'></i>");
                let order = {
                    sellername : seller.username,
                    username: user.username,
                    location : user.location,
                    foodName: seller.product.name,
                    status: 'beklemede'
                }
                dataProvider.addOrder(order)
                            .then((res)=>{})
                            .catch( e => console.log(e));
                dataProvider.addMyOrders(order)
                            .then((res) =>{})
                            .catch(e => {console.log(e)});

            }
            $scope.logout = function(){
                $window.localStorage.clear();
                $state.go('root');
            }   
            
       })