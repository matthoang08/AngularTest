(function(){
    
    var app = angular.module('products-module',[]);
    
    app.directive('productTab', function (){
       return {
           restrict: 'E',
           templateUrl: 'templates/product-tab.html'
       } 
    });    
}) ();