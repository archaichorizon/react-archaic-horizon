'use strict';

import React from 'react';

// Components
import ReleaseCovers from './ReleaseCovers'; 
import ReleaseTracks from './ReleaseTracks'; 
import ReleaseDeckNav from './ReleaseDeckNav';
import Loader from '../ui/Loader';
import AudioPlayer from '../audioPlayer/AudioPlayer';

// Action
import getRelease from '../../actions/getRelease';

export default class ReleaseDeck extends React.Component{

    renderLoading () {
        return (
            <Loader/>
        );
    }

    renderRelease () {
        
        let moody = this.props.release.palettes.moody;

        let style = {
            backgroundColor: moody.primary[2],
            background: `linear-gradient(${moody.accent[0]}, ${moody.primary[0]})`,
            color: moody.secondary[0]
        };

        let coverStyle = {
            backgroundColor: moody.primary[2],
        };
        
        return (
            <div id="release-deck" style={style}>
                <ReleaseDeckNav 
                    current={this.props.release.cat_no} 
                    next={this.props.nav.next} 
                    prev={this.props.nav.prev} 
                    mood={this.props.release.palettes.moody}/>
                <div className="deck-left">
                    <ReleaseCovers 
                        playlist={this.props.release.tracks}
                        covers={this.props.release.covers} 
                        bgColor={moody.secondary[0]}/>
                </div>
                <div className="deck-right">
                    <ReleaseTracks release={this.props.release}/>
                </div>
            </div>
        );
    }

    render () {
        return typeof this.props.release !== 'undefined' && !this.props.isFetching ? this.renderRelease() : this.renderLoading();
    }
}

ReleaseDeck.contextTypes = {
    release: React.PropTypes.object
};

// import ReleaseMood from './ReleaseMood.jsx';
// <ReleaseMood mood={this.props.release.palettes.moody} />
