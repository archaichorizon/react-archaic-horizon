'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ReleasesStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.releases = undefined;
    }

    handleGetReleases (payload) {
        this.setState(payload);
    }

    setState (releases) {
        this.releases = releases;
        this.emitChange();
    }

    getState () {
        return this.releases;
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.releases = state.releases;
    }

}

ReleasesStore.storeName = 'ReleasesStore';
ReleasesStore.handlers = {
    'GET_RELEASES': 'handleGetReleases',
};

export default ReleasesStore;
