app.factory('editmoviefactory', function ($http) {
	return {
		putRequesttoMoviesController: function (movie) {
			var url = "http://localhost:50941/Movies/UpdateMovie" 
			console.log(url);
			$http({
				method: 'PUT', url: url,data:movie, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					window.location.href=("/Movies/Index");
				}).catch(function (response) { });
		}
	};
});

app.factory('editbookfactory', function ($http) {
	return {
		putRequesttoBooksController: function (book) {
			var url = "http://localhost:50941/Books/UpdateBook"
			console.log(url);
			$http({
				method: 'PUT', url: url, data: book, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					window.location.href = ("/Books/Index");
				}).catch(function (response) { });
		}
	};
});