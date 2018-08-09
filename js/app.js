var bookStoreApp = angular.module('bookStoreApp', ["ngRoute"])
  .config(function($routeProvider){
      $routeProvider.when('/catalog',
          {
              templateUrl:'views/catalog.html',
              controller:'catalogController'
          });
      $routeProvider.when('/cart',
          {
              templateUrl:'views/shoppingCart.html',
              controller:'shoppingCartController'
          });
      $routeProvider.otherwise({redirectTo: '/catalog'});
  }).run(function($rootScope) {
        $rootScope.pathToImgFolder = "http://localhost/Book store - AngularJS 1.6/img/";
    });