import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import SvgIcon from '../ui/SvgIcon'; 
import Tooltip from '../ui/Tooltip';

// Action
import nextRelease from '../../actions/nextRelease';
import prevRelease from '../../actions/prevRelease';

export default class ReleaseDeckNav extends React.Component {

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
                    <Tooltip label={`Next Releases: ${this.props.next}`} alignment="LEFT">
                        <span className="hide-text">Next Releases: {this.props.next}</span>
                        <SvgIcon icon="ARROW_LEFT_SMALL" />
                    </Tooltip>
                </Link>
            );
        }

        if (this.props.prev) {
            var prev = (
                <Link to={`/releases/${this.props.prev}`} onClick={this.clickPrevHandler}>
                    <Tooltip label={`Previous Releases: ${this.props.prev}`} alignment="RIGHT">
                        <span className="hide-text">Previous Releases: {this.props.prev}</span>
                        <SvgIcon icon="ARROW_RIGHT_SMALL" />
                    </Tooltip>
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
}

ReleaseDeckNav.contextTypes = {
    executeAction: PropTypes.func.isRequired,
};

ReleaseDeckNav.propTypes = {
    next: PropTypes.string,
    prev: PropTypes.string,
    current: PropTypes.string
};
