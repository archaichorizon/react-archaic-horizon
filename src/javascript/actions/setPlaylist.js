'use strict';

export default function setPlaylist (actionContext, payload, done) {
    actionContext.dispatch('SET_PLAYLIST', payload);
    done();
}
