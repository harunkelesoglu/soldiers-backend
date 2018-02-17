const app = angular.module('hackathon',['routes'])
app.config(function($locationProvider,$stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: '../app/views/login.html',
            controller: 'loginController'
        })
        .state('seller', {
            url: '/seller',
            templateUrl: '../app/views/seller.html',
            controller: 'sellerController'                   
        })
        .state('buyer',{
            url: '/buyer',
            templateUrl: '../app/views/buyer.html',
            controller: 'buyerController'
        })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
});

