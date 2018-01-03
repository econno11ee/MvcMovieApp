app.factory('mediafactory', function ($http) {
	return {
		ajaxCalltoMediaController: function (model, callback) {
			var url = "http://localhost:50941/" + model + "/GetData";
			
			$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' }}).
				then(function (response) {
					var mediaTypes = response.data;
					for (var i = 0; i < mediaTypes.length; i++) {
						var releaseDate = mediaTypes[i].ReleaseDate;
						var datePublished = mediaTypes[i].DatePublished;
						if (releaseDate) {
							mediaTypes[i].ReleaseDate = convertDate(releaseDate);
						}
						if (datePublished) {
							mediaTypes[i].DatePublished = convertDate(datePublished);
						}
					}
						callback(mediaTypes);
				}).catch(function (response) { });
		}
	};
});
