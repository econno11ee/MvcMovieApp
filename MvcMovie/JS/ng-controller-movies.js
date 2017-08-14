//Create controller
//here, $scope is used to share data between view and controller
app.controller("MoviesController", function ($scope, moviesfactory) {
    $scope.movieData = [];
    $scope.addMovieButton ="/Movies/Create"

   
    //Get Code
    $scope.getMovies = function (doThis) {
        moviesfactory.ajaxCalltoMoviesController(doThis);
    };
    $scope.assignTomovieData = function (data) {
        $scope.movieData = data;
    };

    $scope.getMovies($scope.assignTomovieData);
    
  
});

app.directive('goClick', function ($window) {
    return function (scope, element, attrs) {
      

        //attrs.$observe('goClick', function (val) {
        //    path = val;
        //});

        element.bind('click', function () {
            scope.$apply(function () {
                $window.location.href= attrs.goClick;
            });
        })
    };
});
