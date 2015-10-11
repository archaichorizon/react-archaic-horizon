'use strict';

import React from 'react';

// Action
import getRelease from '../actions/getRelease';

class Release extends React.Component {

	componentWillMount () {
		let catNo = this.props.routeParams.catNo;
        this.context.executeAction(getRelease, catNo);
    }

    renderLoading () {
        return (
            <div>
                <h1>loading</h1>
            </div>
        );
    }

    renderRelease () {
        return (
            <article>
                <h1>{this.props.release.title}</h1>
            </article>
        );
    }

    render () {
        return typeof this.props.release !== 'undefined' ? this.renderRelease() : this.renderLoading();
    }

};

Release.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Release;