app.factory('deletemoviefactory', function ($http) {
    return {
        moviesControllerRemoveData: function (movieID) {
            var url = "http://localhost:50941/Movies/RemoveData/" + movieID;
            console.log(url);
            $http({
                method: 'DELETE', url: url, headers: { 'Content-Type': 'application/json' }
            }).
                then(function (response) {
                    window.location.href="/Movies/Index";
                }).catch(function (response) { });
        }
    };
});