//Create controller
//here, $scope is used to share data between view and controller
app.controller("MovieDetailCtrl", function ($scope, moviedetailfactory,deletemoviefactory,editmoviefactory) {
    var urlParts = window.location.href.split('/');
    var lastPart = urlParts[urlParts.length - 1];
    var movieID = parseInt(lastPart);
    console.log(movieID);

    //READ Code
    $scope.movie = {};

    $scope.getMovie = function (doThis) {
        moviedetailfactory.ajaxCalltoMoviesController(movieID, doThis);
    };
    $scope.movieDetailCallback = function (data) {
        $scope.movie = data;
        console.log($scope.movie)
    };
    
    $scope.getMovie($scope.movieDetailCallback);

    //DELETE Code
    $scope.delete = function (movieID) {
        deletemoviefactory.moviesControllerRemoveData(movieID);
    };

    //UPDATE Code
    $scope.update = function (movie) {
        editmoviefactory.putRequesttoMoviesController(movie);
    } 
});

