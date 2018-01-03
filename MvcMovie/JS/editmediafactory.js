app.factory('editmediafactory', function ($http) {
	return {
		putRequesttoMediaController: function (model, media) {
			var url = "http://localhost:50941/" + model + "/UpdateMedia" 
			console.log(url);
			$http({
				method: 'PUT', url: url, data:media, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					window.location.href= model + "/Index";
				}).catch(function (response) { });
		}
	};
});
