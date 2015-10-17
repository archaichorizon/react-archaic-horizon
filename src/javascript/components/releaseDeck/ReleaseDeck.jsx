'use strict';

import React from 'react';

// Components
import ReleaseTracks from './ReleaseTracks.jsx'; 
import ReleaseDeckNav from './ReleaseDeckNav.jsx';

// Action
import getRelease from '../../actions/getRelease';

export default class ReleaseDeck extends React.Component{

    renderLoading () {
        return (
            <div>
                <h1>loading</h1>
            </div>
        );
    }

    renderRelease () {
        
        let moody = this.props.release.palettes.moody;

        let style = {
            backgroundColor: moody.primary[2],
            background: 'linear-gradient(30deg, ' + moody.accent[0] + ', ' + moody.primary[0] + ')',
            color: moody.secondary[0]
        };
        return (
            <div id="release-deck" style={style}>
                <ReleaseDeckNav 
                    current={this.props.release.cat_no} 
                    next={this.props.nav.next} 
                    prev={this.props.nav.prev} 
                    mood={this.props.release.palettes.moody}/>
                <div className="deck-left">
                    <div className="release-cover">
                        <img src={this.props.release.covers[0].downloads.JPEG} />
                    </div>
                </div>
                <div className="deck-right">
                    <ReleaseTracks release={this.props.release}/>
                </div>
            </div>
        );
    }

    render () {
        return typeof this.props.release !== 'undefined' && !this.props.fetching ? this.renderRelease() : this.renderLoading();
    }
}

ReleaseDeck.contextTypes = {
    release: React.PropTypes.object
};

// import ReleaseMood from './ReleaseMood.jsx';
// <ReleaseMood mood={this.props.release.palettes.moody} />
