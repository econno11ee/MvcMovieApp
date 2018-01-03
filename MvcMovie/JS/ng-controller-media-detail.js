//Create controller
//here, $scope is used to share data between view and controller

app.controller("MediaDetailCtrl", function ($scope, mediadetailfactory, deletemediafactory, editmediafactory) {
	var urlParts = window.location.href.split('/');
	var lastPart = urlParts[urlParts.length - 1];
	var ID = parseInt(lastPart);
	var model = urlParts[3];
	console.log(model);
	console.log(ID);

	$scope.backToMoviesButton = "/Movies/Index/"
	$scope.backToBooksButton = "/Books/Index/"

	//READ Code for Movies
	$scope.media = {};

	

	$scope.getMedia = function (ID, model, callback) {
		mediadetailfactory.ajaxCalltoMediaController(ID, model, callback);
	};
	$scope.mediaDetailCallback = function (data) {
		$scope.media = data;
	};
	$scope.getMedia(model, ID, $scope.mediaDetailCallback);

	

	//DELETE Code for Movies
	$scope.delete = function (model, ID) {
		console.log(model);
		deletemediafactory.mediaControllerRemoveData(model, ID);
	};

	//UPDATE Code
	$scope.update = function (model, media) {
		editmediafactory.putRequesttoMediaController(model, media);
	}
	
});


