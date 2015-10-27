'use strict';

export default function fetchingRelease (actionContext, payload, done) {
    actionContext.dispatch('FETCHING_RELEASE', payload);
    done();
}
