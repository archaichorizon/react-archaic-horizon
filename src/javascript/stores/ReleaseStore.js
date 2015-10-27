'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ReleaseStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.release;
        this.isFetching = false;
        this.mood;
    }

    handleFetching (payload) {
        this.isFetching = payload;
        this.emitChange();
    }

    handleGetRelease (payload) {
        this.setState(payload);
    }

    setState (release) {
        this.release = release;
        this.emitChange();
    }
    
    getState () {
        return { 
            release: this.release,
            isFetching: this.isFetching,
            mood: this.mood,
        }
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.release = state.release;
        this.isFetching = state.isFetching;
        this.mood = state.mood;
    }

}

ReleaseStore.storeName = 'ReleaseStore';
ReleaseStore.handlers = {
    'GET_RELEASE': 'handleGetRelease',
    'FETCHING_RELEASE': 'handleFetching',
};

export default ReleaseStore;
