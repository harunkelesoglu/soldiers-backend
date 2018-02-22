angular.module('sellerController',[])
       .controller('sellerController',function($scope,$window,$state,dataProvider){
        const user = JSON.parse($window.localStorage.getItem('user'));
           
        //render user information 
        $scope.googleMapsUrl = "http://maps.google.com/maps/api/js?key=AIzaSyCr0NW4ERXAoCLB7i15PD7lSDw4yz59nno";
        $scope.location= user.location;
        $scope.user = user.name+" "+user.surname;
        $scope.zoom = 12;
        $scope.orders = user.orders;
        
         //click event functions
         $scope.updateOrderStatus = function(){
             let user = {"username":user.username}
             dataProvider.updateOrderStatus(user)
                         .then((res)=>{debugger;})
                         .catch( e => console.log(e));
         }
         $scope.logout = function(){
             $window.localStorage.clear();
             $state.go('root');
         }
       })