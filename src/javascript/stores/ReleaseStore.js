'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import api from '../services/api';


class ReleaseStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.release;
    }

    handleGetRelease (catNo) {
        catNo = catNo.toUpperCase();
        let url = 'http://api.archaichorizon.com/releases/' + catNo + '.json';
        this[catNo] ? console.warn('already fetched') : this.release = api(this, url, catNo);
    }

    setState (release, key) {
        this[key] = release;
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
        this.release = getRelease.release();
    }

}

ReleaseStore.storeName = 'ReleaseStore';
ReleaseStore.handlers = {
    'GET_RELEASE': 'handleGetRelease'
};

export default ReleaseStore;
