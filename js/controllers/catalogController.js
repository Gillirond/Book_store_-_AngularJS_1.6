bookStoreApp.controller('catalogController',
    function CatalogController($scope, $rootScope, dataService, cartService){
       var promiseObj=dataService.getData('books.json');
       promiseObj.then(function(value) {
           $scope.books=value;
       });

       $scope.addToCart = function(id){
           cartService.addToCart(id);
       };

       $scope.backgroundLightStyle = function(path) {
           return {"background-image": "url('"+$rootScope.pathToImgFolder+path+"')", opacity: 0.05, position:"absolute", top:0, left:0, right:0, bottom:0, "background-repeat":"no-repeat", "background-position":"center", "background-size":"cover"};
       };

    }
);