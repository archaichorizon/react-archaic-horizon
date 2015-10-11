'use strict';

import React from 'react';

// Components
import ReleaseDeck from '../ReleaseDeck';

// Action
import getRelease from '../../actions/getRelease';

class Release extends React.Component {

	componentWillMount () {
		let catNo = this.props.routeParams.catNo;
        this.context.executeAction(getRelease, catNo);
    }

    render () {
        return <ReleaseDeck release={this.props.release} />
    }

};

Release.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Release;