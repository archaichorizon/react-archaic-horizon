import React, {PropTypes} from 'react';
import {Link} from 'react-router';

// var ArrowLeft = require('../ui/ArrowLeft.jsx'); 
// var ArrowRight = require('../ui/ArrowRight.jsx'); 

// Action
import nextRelease from '../../actions/nextRelease';
import prevRelease from '../../actions/prevRelease';

export default class ReleaseDeckNav extends React.Component{

    constructor () {
        super();
        this.clickNextHandler = this.clickNextHandler.bind(this);
        this.clickPrevHandler = this.clickPrevHandler.bind(this);
    }

    clickPrevHandler () {
        const payload = { 
            prev: this.props.prev,
            current: this.props.current,
        };
        this.context.executeAction(prevRelease, payload);
    }

    clickNextHandler () {
        const payload = { 
            next: this.props.next,
            current: this.props.current,
        };
        this.context.executeAction(nextRelease, payload);
    }

    render () {

        if (this.props.next) {
            var next = (
                <Link to={`/releases/${this.props.next}`} onClick={this.clickNextHandler}>
                    <span className="hide-text">Next Releases: {this.props.next}</span>
                </Link>
            );
        }

        if (this.props.prev) {
            var prev = (
                <Link to={`/releases/${this.props.prev}`} onClick={this.clickPrevHandler}>
                    <span className="hide-text">Previous Releases: {this.props.prev}</span>
                </Link>
            );
        }

        return (
            <nav className="release-nav">
                <div className="next-release">
                    {next}
                </div>
                <div className="prev-release">
                    {prev}
                </div>
            </nav>
        );
    }
};

ReleaseDeckNav.contextTypes = {
    executeAction: React.PropTypes.func.isRequired,
    nextRelease: React.PropTypes.string,
    prevRelease: React.PropTypes.string
};

// <ArrowLeft color={this.props.mood.secondary[0]}/>
// <ArrowRight color={this.props.mood.secondary[0]}/>
