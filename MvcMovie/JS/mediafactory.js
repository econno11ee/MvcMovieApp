app.factory('moviefactory', function ($http) {
	return {
		ajaxCalltoMoviesController: function (doThis) {
			var url = "http://localhost:50941/Movies/GetData";
			
			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' }}).
				then(function (response) {
					doThis(response.data);
				}).catch(function (response) { });
		}
	};
});

app.factory('bookfactory', function ($http) {
	return {
		ajaxCalltoBooksController: function (doThis) {
			var url = "http://localhost:50941/Books/GetData";
			
			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
				then(function (response) {
					doThis(response.data);
				}).catch(function (response) { });
		}
	};
});