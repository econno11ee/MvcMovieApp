//creat module
//will use ['ngRoute'] when we will implement router
var app = angular.module("MvcMoviesApp", [])

    .config(function ( $locationProvider) {

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});