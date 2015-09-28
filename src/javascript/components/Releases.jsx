'use strict';

import React from 'react';
import {connectToStores}  from 'fluxible-addons-react';
// Store
import ReleasesStore from '../stores/ReleasesStore';
// Action
import getReleases from '../actions/getReleases';

class Releases extends React.Component {

	componentWillMount () {
		this.context.executeAction(getReleases);
	}

    render () {
        return (
            <h1>Releases page.</h1>
        );
    }

};

Releases.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

Releases = connectToStores(Releases, [ReleasesStore], (context, props) => (
    context.getStore(ReleasesStore).getState()
));

export default Releases;