app.factory('moviedetailfactory', function ($http) {
    return {
        ajaxCalltoMoviesController: function (movieID,doThis) {
            var url = "http://localhost:50941/Movies/GetDetails/" + movieID;
            console.log(url);

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
                then(function (response) {
                    doThis(response.data);
                }).catch(function (response) { });
        }
    };
});