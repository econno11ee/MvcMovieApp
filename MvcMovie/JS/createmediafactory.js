app.factory('createmediafactory', function ($http) {
	return {
		postToMediaController: function (model, Media ,callBack) {
			var url = "http://localhost:50941/" + model + "/CreateNew"
			$http({
				method: 'POST', url: url, data: Media, headers: { 'Content-Type': 'application/json' }
			}).
				then(function (response) {
					callBack(model, response.statusText);           

				}).catch(function (response) {
				});
		}
	};
});