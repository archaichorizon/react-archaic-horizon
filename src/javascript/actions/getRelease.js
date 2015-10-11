'use strict';

export default function getRelease (actionContext, payload, done) {
    actionContext.dispatch('GET_RELEASE', payload);
    done();
}
