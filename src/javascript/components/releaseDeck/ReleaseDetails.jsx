import React from 'react';
import SvgIcon from '../ui/SvgIcon';
import cx from 'classnames';
import {secondsToTime} from '../../utils/secondsToTime';

export default class ReleaseTracks extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (index) {
        let track = this.props.release.tracks[index];
        console.warn('Add action here to play "' + track.title + '"');
    }

    render () {
        let tracks = this.props.release.tracks.map((track, i) => {
            return (
                <li key={'track-' + i} className="track">
                    <span className="track-title" onClick={this.handleClick.bind(this, i)}>{track.title}</span>
                    <span className="track-time">{secondsToTime(track.length)}</span>
                    <a href={track.stream}><SvgIcon icon="DOWNLOAD" /></a>
                </li>
            );
        });

        const className = cx({
            'release-tracks': true,
            'two-column': this.props.release.tracks.length > 10
        });

        return (
            <article className="release-details">
                <h1>{this.props.release.title}</h1>
                <h2>{this.props.release.creator}</h2>
                <ol className={className}>
                    {tracks}
                </ol>
            </article>
        );
    }
}

ReleaseTracks.propTypes = {
    release: React.PropTypes.object.isRequired
};
