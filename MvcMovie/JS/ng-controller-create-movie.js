//Create controller
//here, $scope is used to share data between view and controller
app.controller("CreateMovieCtrl", function ($scope, createmoviefactory, moviegenresfactory) {

    $scope.availableGenres = [];

    $scope.getGenres = function (doThis) {
        moviegenresfactory.getMovieGenres(doThis);
        
    };

    $scope.assignAvailableGenres = function (data) {
        $scope.availableGenres = data;
        console.log(availableGenres);
    };

    $scope.getGenres($scope.assignAvailableGenres);
    console.log(availableGenres);
    //Post Code
    
    $scope.create = function (Movie) {
        createmoviefactory.postToMoviesController(Movie);
    };
    
});

