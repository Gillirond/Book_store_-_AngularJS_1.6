bookStoreApp.controller('shoppingCartController',
    function($scope, $rootScope, dataService, cartService) {

        $scope.wishList = cartService.wishList;
        if($scope.wishList.length==0) {
            cartService.restoreCart();
            $scope.wishList = cartService.wishList;
        }

        var promiseObj=dataService.getData('books.json');
        promiseObj.then(function(value) {
            $scope.books=value;
        });

        $scope.getBookIndexById = function(id) {
            var index=$scope.books.map(function(x) {return x.id;}).indexOf(id);
            if(index!=-1)
                return index;
        };

        $scope.totalPrice = function() {
            totalPrice = 0;
            if($scope.wishList.length>0 && $scope.books) {
                for(var i=0;i<$scope.wishList.length;i++) {
                    totalPrice += $scope.wishList[i].quantity * $scope.books[$scope.getBookIndexById($scope.wishList[i].id)].edition.price;
                }
            }
            return totalPrice;
        };

        $scope.totalQuantity = function() {
            totalQuantity = 0;
            if($scope.wishList.length!=0) {
                for(var i=0;i<$scope.wishList.length;i++) {
                    totalQuantity += $scope.wishList[i].quantity;
                }
            }
            return totalQuantity;
        };

        $scope.payCart = function() {
            alert("Total cost is "+$scope.totalPrice()+" grn.\nPlease proceed to checkout.");
        };

        $scope.minus1Item = cartService.minus1Item;
        $scope.plus1Item = cartService.plus1Item;
        $scope.removeFromCart = cartService.removeFromCart;
        $scope.clearCart = cartService.clearCart;
        $scope.isEmpty = cartService.isEmpty;
        $scope.saveCart = cartService.saveCart;

        $scope.$watch('wishList', function(newVal, oldVal) {
            $scope.saveCart();
        }, true);

        $scope.backgroundLightStyle = function(path) {
            return {"background-image": "url('"+$rootScope.pathToImgFolder+path+"')", opacity: 0.1, position:"absolute", top:0, left:0, right:0, bottom:0, "background-repeat":"no-repeat", "background-position-x":"60%", "background-position-y":"50%", "background-size":"cover", "z-index": -1};
        };
    }
);