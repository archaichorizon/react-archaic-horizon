'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import api from '../services/api';
import _ from 'lodash';


class ReleasesStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.releases = undefined;
    }

    handleGetReleases (payload) {
        this.setState(payload);
    }

    handleReleaseNav (payload) {
        console.log(payload);
        this.setNextPrev(payload);
    }

    setNextPrev (current) {
        // @param current = cat_no; e.g. "AH001" 

        let index = current ? _.findIndex(this.releases, {cat_no: current}) : null;
        current = index || 0;

        let length = this.releases.length;
        this.prev = length - 1 !== current ? this.releases[current+1].cat_no : null;
        this.next = current !== 0 ? this.releases[current-1].cat_no : null;       
    }

    setState (releases) {
        this.releases = releases;
        this.setNextPrev();
        this.emitChange();
    }

    getNav () {
        return {
            next: this.next,
            prev: this.prev
        }
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
    'GET_RELEASES': 'handleGetReleases',
    'NEXT_RELEASE': 'handleReleaseNav',
    'PREV_RELEASE': 'handleReleaseNav'
};

export default ReleasesStore;
