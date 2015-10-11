'use strict';

import React, {PropTypes} from 'react';
import Navigation from './Navigation';
import Timestamp from './Timestamp';
import {connectToStores}  from 'fluxible-addons-react';

// Store
import ApplicationStore from '../stores/ApplicationStore';
import ReleasesStore from '../stores/ReleasesStore';

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
        return (
            <div>
                <nav>
                    <Navigation />
                </nav>
                <main>
                    {React.cloneElement(this.props.children, {releases: this.props.releases})}
                </main>
                <footer>
                    <Timestamp />
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

Application = connectToStores(Application, [ApplicationStore, ReleasesStore], (context, props) => {
    return {
        route: context.getStore(ApplicationStore).getState(),
        releases: context.getStore(ReleasesStore).getState()
    };
});

export default Application;

