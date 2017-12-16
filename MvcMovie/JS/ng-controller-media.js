//Create controller
//here, $scope is used to share data between view and controller
app.controller("MediaController", function ($scope, moviefactory, bookfactory) {
	$scope.movieData = [];
	$scope.addMovieButton = "/Movies/Create"

	$scope.bookData = [];
	$scope.addBookButton = "/Books/Create"

   
	//Get Movies Code
	$scope.getMovies = function (doThis) {
		moviefactory.ajaxCalltoMoviesController(doThis);
	};
	$scope.assignTomovieData = function (data) {
		$scope.movieData = data;
	};

	$scope.getMovies($scope.assignTomovieData);

	//Get Books Code
	$scope.getBooks = function (doThis) {
		bookfactory.ajaxCalltoBooksController(doThis);
	};
	$scope.assignTobookData = function (data) {
		$scope.bookData = data;
	};

	$scope.getBooks($scope.assignTobookData);

	
  
});

app.directive('goClick', function ($window) {
	return function (scope, element, attrs) {

		element.bind('click', function () {
			scope.$apply(function () {
				$window.location.href= attrs.goClick;
			});
		})
	};
});
