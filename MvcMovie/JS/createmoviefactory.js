app.factory('createmoviefactory', function ($http) {
    return {
        postToMoviesController: function (Movie,callBack) {
            var url = "http://localhost:50941/Movies/CreateNew"
            
            $http({
                method: 'POST', url: url, data: JSON.stringify(Movie), headers: { 'Content-Type': 'application/json' }
            }).
                then(function (response) {
                    
                    callBack(response.statusText);
                    window.location.href = ("/Movies/Index");
                    
                    

                }).catch(function (response) { });
        }
    };
});