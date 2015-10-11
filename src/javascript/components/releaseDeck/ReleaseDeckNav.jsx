import React, {PropTypes} from 'react';
import {Link} from 'react-router';

// var ArrowLeft = require('../ui/ArrowLeft.jsx'); 
// var ArrowRight = require('../ui/ArrowRight.jsx'); 

export default class ReleaseDeckNav extends React.Component{

    clickNextHandler () {
        // AppActions.getRelease(this.props.nextRelease);
    }

    clickPrevHandler () {
        // AppActions.getRelease(this.props.prevRelease);
    }

    render () {

        if (this.props.nextRelease) {
            var nextRelease = (
                <Link href={'/releases/' + this.props.nextRelease} onClick={this.clickNextHandler}>
                    <span className="hide-text">Next Releases: {this.props.nextRelease}</span>
                    // <ArrowLeft color={this.props.mood.secondary[0]}/>
                </Link>
            );
        }

        if (this.props.prevRelease) {
            var prevRelease = (
                <Link href={'/releases/' + this.props.prevRelease} onClick={this.clickPrevHandler}>
                    <span className="hide-text">Previous Releases: {this.props.prevRelease}</span>
                    // <ArrowRight color={this.props.mood.secondary[0]}/>
                </Link>
            );
        }

        return (
            <nav className="release-nav">
                <div className="next-release">
                    {nextRelease}
                </div>
                <div className="prev-release">
                    {prevRelease}
                </div>
            </nav>
        );
    }
};

ReleaseDeckNav.contextTypes = {
    nextRelease: React.PropTypes.string,
    prevRelease: React.PropTypes.string
};