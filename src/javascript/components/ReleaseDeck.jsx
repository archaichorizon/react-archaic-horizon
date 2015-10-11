'use strict';

import React from 'react';

// Action
import getRelease from '../actions/getRelease';

export default class ReleaseDeck extends React.Component{

    renderLoading () {
        return (
            <div>
                <h1>loading</h1>
            </div>
        );
    }

    renderRelease () {
        return (
            <article className="release-deck">
                <h1>{this.props.release.title}</h1>
                <h2>{this.props.release.creator}</h2>
                <img src={this.props.release.covers[0].downloads.JPEG} />
            </article>
        );
    }

    render () {
        return typeof this.props.release !== 'undefined' ? this.renderRelease() : this.renderLoading();
    }
}

ReleaseDeck.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
