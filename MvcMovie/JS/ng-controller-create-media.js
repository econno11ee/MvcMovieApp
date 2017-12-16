//Create controller
//here, $scope is used to share data between view and controller
app.controller("CreateMediaCtrl", function ($scope, createmoviefactory, createbookfactory, genresfactory) {
	var urlParts = window.location.href.split('/');
	var subsection = urlParts[urlParts.length - 2];
	$scope.Movie = {};
	$scope.Book = {};
	//GET Genres Code
	$scope.availableGenres = [];

	$scope.getGenres = function (doThis) {
		genresfactory.getGenres(doThis);

	};

	$scope.assignAvailableGenres = function (data) {
		$scope.availableGenres = data.genres;
	};

	$scope.getGenres($scope.assignAvailableGenres);

	//POST Code

	$scope.submit = function (Media) {
		$scope.validateData(Media,$scope.recordResponse);
	};


	$scope.validateData = function (Media, callBack) {
		console.log(Media);
		if (subsection === "Movie") {
			createmoviefactory.postToMoviesController(Media, $scope.recordResponse);
		} else {
			createbookfactory.postToBooksController(Media, $scope.recordResponse);
		}
	};

	$scope.recordResponse = function (response) {
		if (subsection === "Movie") {
			$scope.messages = 'Your media has successfully been added!'
			window.location.href = ("/Movies/Index");
		} else {
			$scope.messages = 'There was  problem adding your media :('
		}
	}


});
		
		



