//creat module
//will use ['ngRoute'] when we will implement router
var app = angular.module("MvcMoviesApp", []);

	app.config(function ( $locationProvider) {
		// use the HTML5 History API
		$locationProvider.html5Mode(true);
});

function convertDate(UTCdate) {
	var jsDate = new Date(parseInt(UTCdate.replace("/Date(", "").replace(")/", ""), 10));
	return jsDate;
}




