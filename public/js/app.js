var gems = [
    {
        name: 'Azurite'
        , price: 2.95
        , canPurchase: true
        , description: 'test'
        , soldOut: false
        , reviews: [
            {
                stars: 5
                , body: "Great!"
                , author: "Matt"
            }, {
                stars: 2
                , body: "cracked"
                , author: "Thomas"
            }
        ]
    }, {
        name: 'Ruby'
        , price: 3.00
        , canPurchase: true
        , description: '2'
        , soldOut: false
        , reviews: [
            {
                stars: 4
                , body: "Okay"
                , author: "bro"
            }
        ]
    }
];

var reviews = [
    {
        stars: 5
        , body: "Great!"
        , author: "Matt"
    }
    , {
        stars: 2
        , body: "cracked"
        , author: "Thomas"
    }
    , {
        stars: 4
        , body: "Okay"
        , author: "bro"
    }
];

var app = angular.module('store', []);

app.controller('StoreController', function () {
    this.products = gems;
    this.reviews = reviews;

});

app.controller('PanelController', function () {

    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
});

app.controller('ReviewController', function($scope){
    this.review = {};
    
    this.addReview = function (reviews) {
        this.review.createdOn = Date.now();
        reviews.push(this.review);
        this.review = {};
        $scope.reviewForm.$setPristine();
    };
});

app.directive('reviewTab', function (){
   return {
      restrict: 'E' ,
      templateUrl: 'templates/review-tab.html'
   };
});

app.directive('descriptionTab', function (){
   return {
       restrict: 'E',
       templateUrl: 'templates/description-tab.html'
   } 
});