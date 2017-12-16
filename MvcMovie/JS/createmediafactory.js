app.factory('createmoviefactory', function ($http) {
	return {
		postToMoviesController: function (Movie,callBack) {
			var url = "http://localhost:50941/Movies/CreateNew"
			console.log(Movie)
			$http({
				method: 'POST', url: url, data: Movie, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {

					
					callBack(response.statusText);           
					
					

				}).catch(function (response) {
				});
		}
	};
});

app.factory('createbookfactory', function ($http) {
	return {
		postToBooksController: function (Book, callBack) {
			var url = "http://localhost:50941/Books/CreateNew"
			console.log(Book)
			$http({
				method: 'POST', url: url, data: Book, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {


					callBack(response.statusText);



				}).catch(function (response) {
				});
		}
	};
});