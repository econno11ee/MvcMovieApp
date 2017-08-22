//Create controller
//here, $scope is used to share data between view and controller
app.controller("CreateMovieCtrl", function ($scope, createmoviefactory, moviegenresfactory) {
    $scope.Movie = {};
    //GET Genres Code
    $scope.availableGenres = [];

    $scope.getGenres = function (doThis) {
        moviegenresfactory.getMovieGenres(doThis);

    };

    $scope.assignAvailableGenres = function (data) {
        $scope.availableGenres = data.genres;
    };

    $scope.getGenres($scope.assignAvailableGenres);

    //POST Movie Code

    $scope.submit = function (Movie) {
        $scope.validateData(Movie,$scope.recordResponse);
    };


    $scope.validateData = function (Movie, callBack) {
        console.log(Movie);
        createmoviefactory.postToMoviesController(Movie, $scope.recordResponse);
        
    };

    $scope.recordResponse = function (response) {
        if (response == 'OK') {
            $scope.messages = 'Your movie has successfully been added!'
            window.location.href = ("/Movies/Index");
        } else {
            $scope.messages = 'There was  problem adding your movie :('
        }
    }


});
        
        



