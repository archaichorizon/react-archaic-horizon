'use strict';

export default function nextReleases (actionContext, payload, done) {
    actionContext.dispatch('PREV_RELEASE', payload);
    done();
}
