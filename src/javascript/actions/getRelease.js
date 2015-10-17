'use strict';

import request from'superagent-bluebird-promise';

// set release to its catalog 
let cache = {};

export default function getRelease (actionContext, payload, done) {
    
    let url;
    payload = payload.toUpperCase();

    // check cache and return if true
    if(cache[payload]) {
    	// console.log('Cached Response');
    	actionContext.dispatch('GET_RELEASE', cache[payload]);
    	done();
    	return;
    }

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
			// console.log(res);
			payload = res.body;

			// cache the response
		    let key = payload.cat_no;
		    cache[key] = payload;

			actionContext.dispatch('GET_RELEASE', payload);
			done();
		}, function(err) {
			console.warn(err);
			done();
		});
}
