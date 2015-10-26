'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class PlayerStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
    }

    handleSetPlaylist (payload) {
        this.setState(payload);
    }

    setState (playlist) {
        this.playlist = playlist;
        this.emitChange();
    }

    getState () {
        return this.playlist;
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.playlist = state.playlist;
    }

}

PlayerStore.storeName = 'PlayerStore';
PlayerStore.handlers = {
    'SET_PLAYLIST': 'handleSetPlaylist',
};

export default PlayerStore;
