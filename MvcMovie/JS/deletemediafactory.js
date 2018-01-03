app.factory('deletemediafactory', function ($http) {
	return {
		mediaControllerRemoveData: function (model, ID) {
			var url = "http://localhost:50941/" + model + "/RemoveData/" + ID;
			console.log(url);
			$http({
				method: 'DELETE', url: url, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					window.location.href=model + "/Index";
				}).catch(function (response) { });
		}
	};
});

