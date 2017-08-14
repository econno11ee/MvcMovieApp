//Create controller
//here, $scope is used to share data between view and controller
app.controller("CreateMovieCtrl", function ($scope, createmoviefactory, moviegenresfactory) {

    //GET Genres Code
    $scope.availableGenres = [];

    $scope.getGenres = function (doThis) {
        moviegenresfactory.getMovieGenres(doThis);
        
    };

    $scope.assignAvailableGenres = function (data) {
        $scope.availableGenres = data.genres;
    };

    $scope.getGenres($scope.assignAvailableGenres);


    //Form Validation Code

    //$scope.subjectListOptions = {
    //    'bug': 'Report a Bug',
    //    'account': 'Account Problems',
    //    'mobile': 'Mobile',
    //    'user': 'Report a Malicious User',
    //    'other': 'Other'
    //};

    ////// Inititate the promise tracker to track form submissions.
    //$scope.progress = promiseTracker();

    //// Form submit handler.
    //$scope.submit = function (form) {
    //    // Trigger validation flag.
    //    $scope.submitted = true;

    //    // If form is invalid, return and let AngularJS show validation errors.
    //    if (form.$invalid) {
    //        return;
    //    }

    //    // Default values for the request.
   

    //    // Perform JSONP request.
    //    var $promise = $http.jsonp('response.json', config)
    //        .success(function (data, status, headers, config) {
    //            if (data.status == 'OK') {
    //                $scope.name = null;
    //                $scope.email = null;
    //                $scope.subjectList = null;
    //                $scope.url = null;
    //                $scope.comments = null;
    //                $scope.messages = 'Your form has been sent!';
    //                $scope.submitted = false;
    //            } else {
    //                $scope.messages = 'Oops, we received your request, but there was an error processing it.';
    //                $log.error(data);
    //            }
    //        })
    //        .error(function (data, status, headers, config) {
    //            $scope.proso aregress = data;
    //            $scope.messages = 'There was a network error. Try again later.';
    //            $log.error(data);
    //        })
    //        .finally(function () {
    //            // Hide status messages after three seconds.
    //            $timeout(function () {
    //                $scope.messages = null;
    //            }, 3000);
    //        });

    //    // Track the request and show its progress to the user.
    //    $scope.progress.addPromise($promise);
  

    //POST Movie Code
    $scope.success = [];

   

    $scope.create = function () {
        $scope.validateData($scope.recordResponse);
    };


    $scope.validateData = function (Movie, callBack) {
        createmoviefactory.postToMoviesController(Movie,callBack);
    };

    $scope.recordResponse = function (callBack) {
        $scope.success = callBack;
     
        console.log($scope.success);
    };

   

});


