//Create controller
//here, $scope is used to share data between view and controller
app.controller("MoviesController", function ($scope, moviesfactory) {
    $scope.movieData = [];
    $scope.getMovies = function (doThis) {
        moviesfactory.ajaxCalltoMoviesController(doThis);
    };
    $scope.assignTomovieData = function (data) {
        $scope.movieData = data;
    };

    $scope.getMovies($scope.assignTomovieData);

});


