'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import getReleases from '../services/getReleases';


class ReleasesStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.releases;
    }

    handleGetReleases (payload) {
        this.releases = getReleases.releases();
        this.emitChange();
    }

    getState () {
        return {
            releases: this.releases
        };
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.releases = getReleases.releases();
    }

}

ReleasesStore.storeName = 'ReleasesStore';
ReleasesStore.handlers = {
    'GET_RELEASES': 'handleGetReleases'
};

export default ReleasesStore;
