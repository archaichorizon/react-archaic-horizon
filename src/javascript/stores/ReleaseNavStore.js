'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import _ from 'lodash';

class ReleaseNavStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.nav = {};
        this.nav.next;
        this.nav.prev;
    }

    handleGetReleases (releases) {
        this.releases = releases;
    }

    handleGetRelease (release) {
        this.current = release.cat_no;
        this.setNextPrev(this.current);
    }

    handleNextRelease (payload) {
        this.setNextPrev(payload.next);
    }

    handlePrevRelease (payload) {
        this.setNextPrev(payload.prev);
    }

    setNextPrev (current) {
        let index = current ? _.findIndex(this.releases, {cat_no: current}) : null;
        current = index || 0;

        let releases = this.releases.length;
        this.nav.prev = releases - 1 !== current ? this.releases[current+1].cat_no : null;
        this.nav.next = current !== 0 ? this.releases[current-1].cat_no : null;
        this.emitChange();

    }

    getState () {
        return this.nav;
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.nav = state.nav;
    }
}

ReleaseNavStore.storeName = 'ReleaseNavStore';
ReleaseNavStore.handlers = {
    'GET_RELEASES': 'handleGetReleases',
    'GET_RELEASE': 'handleGetRelease',
    'NEXT_RELEASE': 'handleNextRelease',
    'PREV_RELEASE': 'handlePrevRelease',
};

export default ReleaseNavStore;
