'use strict';

import request from'superagent-bluebird-promise';

import fetchingRelease from '../actions/fetchingRelease';
// import setPlaylist from '../actions/setPlaylist';

// set release to its catalog
let cache = {};

export default function getRelease (actionContext, payload, done) {

    let catNum = payload.toUpperCase();

    // check cache and return release if true
    if(cache[catNum]) {
        // console.log('Cached Response');
        actionContext.dispatch('GET_RELEASE', cache[catNum]);
        // actionContext.executeAction(fetchingRelease, false);
        done();
        return;
    }

    let url;

    switch (catNum) {
        case 'LATEST':
            url = 'http://api.archaichorizon.com/releases/latest.json';
            break;
        default:
            url = 'http://api.archaichorizon.com/releases/' + catNum + '.json';
            break;
    }

    actionContext.executeAction(fetchingRelease, true);

    return request
        .get(url).then( function(res) {
            // console.log(res);
            catNum = res.body;

            // cache the response
            let key = catNum.cat_no;
            cache[key] = catNum;

            // SET PLAYLIST
            // set playlist by queueing an album
            // let playlist = catNum.tracks;
            // actionContext.dispatch('SET_PLAYLIST', playlist);

            actionContext.dispatch('GET_RELEASE', catNum);
            actionContext.executeAction(fetchingRelease, false);
            done();
        }, function(err) {
            console.warn(err);
            done();
        });
}
