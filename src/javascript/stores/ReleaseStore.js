'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ReleaseStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.release;
    }

    handleGetRelease (payload) {
        this.setState(payload);
    }

    setState (release) {
        this.release = release;
        this.emitChange();
    }

    getState () {
        return this.release;
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.release = state.release;
    }

}

ReleaseStore.storeName = 'ReleaseStore';
ReleaseStore.handlers = {
    'GET_RELEASE': 'handleGetRelease',
};

export default ReleaseStore;
