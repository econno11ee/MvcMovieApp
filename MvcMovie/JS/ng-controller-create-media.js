//Create controller
//here, $scope is used to share data between view and controller
app.controller("CreateMediaCtrl", function ($scope, createmediafactory, genresfactory) {
	$scope.Movie = {};
	$scope.Book = {};

	$scope.backToMoviesButton = "/Movies/Index/"
	$scope.backToBooksButton = "/Books/Index/"
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

	$scope.submit = function (model, Media) {
		$scope.validateData(model, Media,$scope.recordResponse);
	};


	$scope.validateData = function (model, Media, callBack) {
			createmediafactory.postToMediaController(model, Media, $scope.recordResponse);
	};

	$scope.recordResponse = function (model, response) {
		if (response === "OK") {
			$scope.messages = 'Your media has successfully been added!'
			window.location.href = model + "/Index";
		} else {
			$scope.messages = 'There was  problem adding your media :('
		}
	}


});
		
		



