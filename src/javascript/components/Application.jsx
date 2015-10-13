'use strict';

import React, {PropTypes} from 'react';
import Navigation from './Navigation';
import {connectToStores}  from 'fluxible-addons-react';

// Store
import ApplicationStore from '../stores/ApplicationStore';
import ReleasesStore from '../stores/ReleasesStore';
import ReleaseStore from '../stores/ReleaseStore';

// Action
import getReleases from '../actions/getReleases';


class Application extends React.Component {

    componentWillMount () {
        this.context.executeAction(getReleases);
    }

    renderLoading () {
        return (
            <div>
                <h1>loading</h1>
            </div>
        );
    }

    renderApp () {
        let props = {
            releases: this.props.releases,
            release: this.props.release,
            nav: this.props.nav,
            latest: this.props.latest
        };
        return (
            <div>
                <Navigation />
                <main>
                    {React.cloneElement(this.props.children, props)}
                </main>
                <footer>
                </footer>
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

Application = connectToStores(Application, [ApplicationStore, ReleasesStore, ReleaseStore], (context, props) => {
    return {
        route: context.getStore(ApplicationStore).getState(),
        releases: context.getStore(ReleasesStore).getState(),
        nav: context.getStore(ReleasesStore).getNav(),
        release: context.getStore(ReleaseStore).getState(),
        latest: context.getStore(ReleaseStore).getLatest()
    };
});

export default Application;

