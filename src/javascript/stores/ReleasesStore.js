'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import api from '../services/api';


class ReleasesStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.releases = undefined;
    }

    handleGetReleases (payload) {
        this.requestReleases();
    }

    requestReleases () {
        this.releases = api(this, 'http://api.archaichorizon.com/releases.json');
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
        this.releases = getReleases.releases();
    }

}

ReleasesStore.storeName = 'ReleasesStore';
ReleasesStore.handlers = {
    'GET_RELEASES': 'handleGetReleases'
};

export default ReleasesStore;
