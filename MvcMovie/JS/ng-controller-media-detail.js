//Create controller
//here, $scope is used to share data between view and controller

app.controller("MediaDetailCtrl", function ($scope, moviedetailfactory,bookdetailfactory, deletemoviefactory,deletebookfactory, editmoviefactory, editbookfactory) {
	var urlParts = window.location.href.split('/');
	var lastPart = urlParts[urlParts.length - 1];
	var ID = parseInt(lastPart);
	var subsection = urlParts[urlParts.length - 2];
	console.log(ID);


	//READ Code for Movies
	$scope.movie = {};
	$scope.book = {};

	$scope.getMovie = function (doThis) {
		moviedetailfactory.ajaxCalltoMoviesController(ID, doThis);
	};
	$scope.movieDetailCallback = function (data) {
		$scope.movie = data;
		console.log($scope.movie)
	};

	//READ Code for Books
	
	$scope.getBook($scope.bookDetailCallback);

	$scope.getBook = function (doThis) {
		bookdetailfactory.ajaxCalltoBooksController(ID, doThis);
	};
	$scope.bookDetailCallback = function (data) {
		$scope.book = data;
		console.log($scope.book)
	};

	$scope.getBook($scope.bookDetailCallback);

	//DELETE Code for Movies
	$scope.delete = function (ID, subsection) {
		if (subsection === "Movie") {
			deletemoviefactory.booksControllerRemoveData(ID);
		} else {
			deletebookfactory.booksControllerRemoveData(ID);
		}
	};

	//UPDATE Code
	$scope.update = function (media, subsection) {
		if (subsection === "Movie") {
			editbookfactory.putRequesttoBooksController(movie);
		} else {
			editbookfactory.putRequesttoBooksController(movie);
		}
	} 
	});


