'use strict';

import request from'superagent-bluebird-promise';

var api = function (context, url) {
	return request
		.get(url)
		.then(function(res) {
			context.setState(res.body)
		}, function(err) {
			console.warn(err);
		});
}

module.exports = api;