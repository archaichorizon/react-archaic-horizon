'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ReleaseStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.release;
        this.fetching = false;
    }

    handleFetching (payload) {
        this.fetching = payload;
        this.emitChange();
    }

    handleGetRelease (payload) {
        this.setState(payload);
    }

    setState (release) {
        this.release = release;
        this.emitChange();
    }

    getFetching () {
        return this.fetching;
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
    'FETCHING_RELEASE': 'handleFetching',
};

export default ReleaseStore;
