'use strict';

import BaseStore from 'fluxible/addons/BaseStore';
import api from '../services/api';


class ReleaseStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.release;
    }

    handleGetRelease (payload) {
        switch (payload) {
            case 'LATEST':
                this.fetchLatest();
                break;
            default:
                this.fetchCatNo(payload);
                break;
        }
    }

    fetchLatest() {
        let url = 'http://api.archaichorizon.com/releases/latest.json';
        this.latest ? this.setRelease(catNo) : api(this, url, 'latest');
    }

    fetchCatNo(catNo) {
        catNo = catNo.toUpperCase();
        let url = 'http://api.archaichorizon.com/releases/' + catNo + '.json';
        this[catNo] ? this.setRelease(catNo) : api(this, url, catNo);
    }

    setRelease (release) {
        console.warn('already fetched ' + release)
        this.release = this[release];
    }

    setState (release, key) {
        this[key] = release;
        this.release = release;
        this.emitChange();
    }

    getState () {
        return this.release;
    }

    getLatest () {
        return this.latest;
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
