'use strict';

import request from'superagent-bluebird-promise';

export default function getReleases (actionContext, payload, done) {

	let url = 'http://api.archaichorizon.com/releases.json';
	
	return request
		.get(url).then( function(res) {
			console.log(res);
			actionContext.dispatch('GET_RELEASES', res.body);
			done();
		}, function(err) {
			console.warn(err);
		});
}
