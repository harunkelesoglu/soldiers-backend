
angular.module('loginController',[])
       .controller('loginController',function($scope,$window,$state,$http,dataProvider){
            $scope.login = function(){
                let username = $scope.username;
                dataProvider.Auth(username)
                            .then((res)=>{
                                debugger;
                                const user = res.data;
                                if(user){
                                    $window.localStorage.setItem('user',JSON.stringify(user));
                                    (user.statu === "alici") && $state.go('buyer');
                                    (user.statu === "satici") && $state.go('seller');
                                }else{
                                    $state.go('/')
                                }
                            })
                            .catch( e => console.log(e));
                
            }
       })
