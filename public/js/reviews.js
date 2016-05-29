(function(){
    
    var app = angular.module('review-module', [])

    app.directive('reviewTab', [ '$http', function ($http){
       return {
           restrict: 'E' ,
           templateUrl: 'templates/review-tab.html',
           controller: function ($scope) {

               this.review = {};

               this.addReview = function (reviews) {
                    this.review.createdOn = Date.now();
                    reviews.push(this.review);
                    this.review = {};
                    $scope.reviewForm.$setPristine();
                };  
           }, 
           controllerAs: 'reviewCtrl'
       };
    }]);
}) ();    