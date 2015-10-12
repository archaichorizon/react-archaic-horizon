'use strict';

export default function nextReleases (actionContext, payload, done) {
    actionContext.dispatch('NEXT_RELEASE', payload);
    done();
}
