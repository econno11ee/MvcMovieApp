app.factory('moviesfactory', function ($http) {
    return {
        ajaxCalltoMoviesController: function (doThis) {
            var url = "http://localhost:50941/Movies/GetData";


            $http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
               then(function (response) {
                    doThis(response.data);
                }).catch(function (response) { });
        }
    };
});