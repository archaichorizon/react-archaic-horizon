'use strict';

import React from 'react';

// Action
import getRelease from '../actions/getRelease';

class Release extends React.Component {

	componentWillMount () {
		let catNo = this.props.routeParams.catNo;
        this.context.executeAction(getRelease, catNo);
    }

    render () {
        return (
            <article>
                <h1>{this.props.routeParams.catNo}</h1>
            </article>
        );
    }

};

Release.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Release;