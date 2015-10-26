'use strict';

import React, {PropTypes} from 'react';

import Navigation from './Navigation';
import Loader from './ui/Loader';
import AudioPlayer from './audioPlayer/AudioPlayer';

import {connectToStores}  from 'fluxible-addons-react';

// Store
import ApplicationStore from '../stores/ApplicationStore';
import PlayerStore from '../stores/PlayerStore';
import ReleasesStore from '../stores/ReleasesStore';
import ReleaseNavStore from '../stores/ReleaseNavStore';
import ReleaseStore from '../stores/ReleaseStore';

// Action
import getReleases from '../actions/getReleases';


class Application extends React.Component {

    componentWillMount () {
        this.context.executeAction(getReleases);
    }

    renderLoading () {
        return (
            <Loader/>
        );
    }

    renderApp () {
        const props = {
            releases: this.props.releases,
            release: this.props.release,
            nav: this.props.nav,
            latest: this.props.latest,
            fetching: this.props.fetching,
        };
        const player = typeof this.props.playlist !== 'undefined' ? <AudioPlayer playlist={this.props.playlist}/> : null;
        return (
            <div>
                <Navigation />
                {player}
                <main>
                    {React.cloneElement(this.props.children, props)}
                </main>
                <footer/>
            </div>
        );
    }

    render () {
        return typeof this.props.releases !== 'undefined' ? this.renderApp() : this.renderLoading();
    }

}

Application.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

Application = connectToStores(Application, [ApplicationStore, PlayerStore, ReleasesStore, ReleaseStore], (context, props) => {
    return {
        route: context.getStore(ApplicationStore).getState(),
        releases: context.getStore(ReleasesStore).getState(),
        nav: context.getStore(ReleaseNavStore).getState(),
        release: context.getStore(ReleaseStore).getState(),
        fetching: context.getStore(ReleaseStore).getFetching(),
        playlist: context.getStore(PlayerStore).getState(),
    };
});

export default Application;

