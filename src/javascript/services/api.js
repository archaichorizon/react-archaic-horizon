'use strict';

import request from'superagent-bluebird-promise';

var api = function (context, url, key) {
	// key is optional and used to set the res to a dynamic key
	// within the store state
	return request
		.get(url)
		.then(function(res) {
			context.setState(res.body, key)
		}, function(err) {
			console.warn(err);
		});
}

module.exports = api;