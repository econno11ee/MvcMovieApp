app.factory('moviegenresfactory', function ($http) {
    return {
        getMovieGenres: function (doThis) {
            var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=8e54ab2ef4338add2286f2662fcc4d88&language=en-US";
            console.log(url);

            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
                then(function (response) {
                    doThis(response.data);
                }).catch(function (response) { });
        }
    };
});