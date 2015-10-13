'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import ReleasesStore from '../stores/ReleasesStore';

class ReleaseNavStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.releaseNav = {
            next: 'foo',
            prev: 'foo'
        };
    }

    handleNextRelease () {
        this.getReleases();
    }

    handlePrevRelease () {

    }

    getReleases () {
        this.releases = ReleasesStore.getState();
    }

    getState () {
        return this.releaseNav;
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.releaseNav = state.releaseNav
    }
}

ReleaseNavStore.storeName = 'ReleaseNavStore';
ReleaseNavStore.handlers = {
    'NEXT_RELEASE': 'handleNextRelease',
    'PREV_RELEASE': 'handlePrevRelease'
};

export default ReleaseNavStore;
