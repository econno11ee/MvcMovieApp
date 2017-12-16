app.factory('deletemoviefactory', function ($http) {
	return {
		moviesControllerRemoveData: function (ID) {
			var url = "http://localhost:50941/Movies/RemoveData/" + ID;
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

app.factory('deletebookfactory', function ($http) {
	return {
		moviesControllerRemoveData: function (ID) {
			var url = "http://localhost:50941/Books/RemoveData/" + ID;
			console.log(url);
			$http({
				method: 'DELETE', url: url, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					window.location.href = "/Books/Index";
				}).catch(function (response) { });
		}
	};
});