app.factory('mediadetailfactory', function ($http) {
	return {
		ajaxCalltoMediaController: function (model,ID, callback) {
			var url = "http://localhost:50941/" + model + "/GetDetails/" + ID;
			console.log(url);

			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).
				then(function (response) {
					var media = response.data;
					var releaseDate = media.ReleaseDate;
					var datePublished = media.DatePublished;
					if (releaseDate) {
						media.ReleaseDate = convertDate(releaseDate);
					}
					if (datePublished) {
						media.DatePublished = convertDate(datePublished);
					}
					callback(media);
				}).catch(function (response) { });
		}
	};
});