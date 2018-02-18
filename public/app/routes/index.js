
      angular.module('routes',['ui.router','loginController','sellerController','buyerController'])
             .config(function($locationProvider,$stateProvider, $urlRouterProvider) {
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
                  });
                  $urlRouterProvider.otherwise('/');
                  $locationProvider.html5Mode(true);
        });