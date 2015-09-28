'use strict';

export default function navigate (actionContext, payload, done) {
    actionContext.dispatch('GET_RELEASES', payload);
    done();
}
