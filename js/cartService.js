bookStoreApp.factory('cartService', function(){
    return {
        wishList: [],
        addToCart: function(id) {
            for(var i=0;i<this.wishList.length;i++) {
                if (this.wishList[i].id == id) {
                    this.wishList[i].quantity+=1;
                    return;
                }
            }
            this.wishList.push({id: id, quantity: 1});
        },
        removeFromCart: function(id) {
            for(var i=0;i<this.wishList.length;i++) {
                if(this.wishList[i].id==id) {
                    this.wishList.splice(i,1);
                    break;
                }
            }
        },
        clearCart: function() {
            if(confirm("Delete all books from cart?"))
                this.wishList.length = 0;
        },
        plus1Item: function(index) {
            this.wishList[index].quantity+=1;
        },
        minus1Item: function(index) {
            if(this.wishList[index].quantity > 0)
                this.wishList[index].quantity-=1;
        },
        saveCart : function () {
            var str = JSON.stringify(this.wishList);
            localStorage.setItem('IBbookCart', str);
        },
        restoreCart : function() {
            //localStorage.clear();
            if(localStorage.hasOwnProperty('IBbookCart')) {
                var parsed = JSON.parse(localStorage.getItem('IBbookCart'));
                if(parsed=="[]")
                    parsed = [];
                this.wishList = parsed;
            }
        },
        isEmpty : function() {
            return (this.wishList.length==0);
        }
    };
});