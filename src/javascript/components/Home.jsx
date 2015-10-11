'use strict';

import React from 'react';

// Action
import getRelease from '../actions/getRelease';

export default class Home extends React.Component{

	componentWillMount () {
        this.context.executeAction(getRelease, 'LATEST');
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
                <h1>{this.props.latest.title}</h1>
            </article>
        );
    }

    render () {
        return typeof this.props.latest !== 'undefined' ? this.renderRelease() : this.renderLoading();
    }
}

Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
