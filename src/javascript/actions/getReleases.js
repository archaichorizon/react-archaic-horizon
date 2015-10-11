'use strict';

export default function getReleases (actionContext, payload, done) {
    actionContext.dispatch('GET_RELEASES', payload);
    done();
}
