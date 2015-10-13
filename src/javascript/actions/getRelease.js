'use strict';

import request from'superagent-bluebird-promise';

export default function getRelease (actionContext, payload, done) {
    
    let url;

    switch (payload) {
        case 'LATEST':
            url = 'http://api.archaichorizon.com/releases/latest.json';
            break;
        default:
            url = 'http://api.archaichorizon.com/releases/' + payload + '.json';
            break;
    }
	
	return request
		.get(url).then( function(res) {
			console.log(res);
			payload = res.body;
			actionContext.dispatch('GET_RELEASE', payload);
			done();
		}, function(err) {
			console.warn(err);
		});
}
