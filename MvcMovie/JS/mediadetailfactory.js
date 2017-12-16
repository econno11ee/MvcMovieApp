app.factory('moviedetailfactory', function ($http) {
	return {
		ajaxCalltoMoviesController: function (ID,doThis) {
			var url = "http://localhost:50941/Movies/GetDetails/" + movieID;
			console.log(url);

			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
				then(function (response) {
					doThis(response.data);
				}).catch(function (response) { });
		}
	};
});

app.factory('bookdetailfactory', function ($http) {
	return {
		ajaxCalltoBooksController: function (ID, doThis) {
			var url = "http://localhost:50941/Books/GetDetails/" + movieID;
			console.log(url);

			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
				then(function (response) {
					doThis(response.data);
				}).catch(function (response) { });
		}
	};
});