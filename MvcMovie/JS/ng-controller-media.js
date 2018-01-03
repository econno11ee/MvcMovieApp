//Create controller
//here, $scope is used to share data between view and controller
app.controller("MediaController", function ($scope, mediafactory) {
	var urlParts = window.location.href.split('/');
	var model = urlParts[3];
	console.log(model);
	$scope.mediaData = [];
	$scope.addMovieButton = "/Movies/Create"
	$scope.addBookButton = "/Books/Create"

   
	//Get Movies Code
	$scope.getMedia = function (model, callback) {
		mediafactory.ajaxCalltoMediaController(model, callback);
	};
	$scope.assignToMediaData = function (data) {
		$scope.mediaData = data;
	};

	$scope.getMedia(model,$scope.assignToMediaData);
	
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
