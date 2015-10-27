'use strict';

import request from'superagent-bluebird-promise';

import fetchingRelease from '../actions/fetchingRelease';
import setPlaylist from '../actions/setPlaylist';

// set release to its catalog 
let cache = {};

export default function getRelease (actionContext, payload, done) {
    
    payload = payload.toUpperCase();
    
    // check cache and return release if true
    if(cache[payload]) {
    	// console.log('Cached Response');
    	actionContext.dispatch('GET_RELEASE', cache[payload]);
        // actionContext.executeAction(fetchingRelease, false);
    	done();
    	return;
    }

    let url;

    switch (payload) {
        case 'LATEST':
            url = 'http://api.archaichorizon.com/releases/latest.json';
            break;
        default:
            url = 'http://api.archaichorizon.com/releases/' + payload + '.json';
            break;
    }
	
    actionContext.executeAction(fetchingRelease, true);

	return request
		.get(url).then( function(res) {
			// console.log(res);
			payload = res.body;

			// cache the response
		    let key = payload.cat_no;
		    cache[key] = payload;

            // SET PLAYLIST
            // set playlist by queueing an album
            // let playlist = payload.tracks;
            // actionContext.dispatch('SET_PLAYLIST', playlist);

			actionContext.dispatch('GET_RELEASE', payload);
            actionContext.executeAction(fetchingRelease, false);
			done();
		}, function(err) {
			console.warn(err);
			done();
		});
}
