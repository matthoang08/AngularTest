(function() {
    var app = angular.module('store', ['products-module', 'review-module']);

    app.controller('StoreController', ['$http', function ($http) {
        
        var store = this;
        
        store.products = [];
        store.reviews = [];
        
        $http.get('json/gems.json').success(function(data) {
           store.products = data; 
        });
        $http.get('json/reviews.json').success(function(data) {
           store.reviews = data; 
        });

    }]);

    app.controller('PanelController', function () {

        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });
})();