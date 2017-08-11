app.factory('createmoviefactory', function ($http) {
    return {
        postToMoviesController: function (Movie) {
            var url = "http://localhost:50941/Movies/CreateNew"
            console.log(url);
            $http({
                method: 'POST', url: url,data:Movie, headers: { 'Content-Type': 'application/json' }
            }).
                then(function (response) {
                    window.location.href=("/Movies/Index");
                }).catch(function (response) { });
        }
    };
});