import React from 'react';
import SvgIcon from '../ui/SvgIcon';

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
                <li key={i}>
                    <button onClick={this.handleClick.bind(this, i)}>
                        {track.title}
                    </button>
                    <a href={track.stream}>
                        <SvgIcon icon="DOWNLOAD" />
                    </a>
                </li>
            );
        });

        return (
            <article className="release">
                <h1>{this.props.release.title}</h1>
                <h2>{this.props.release.creator}</h2>
                <ol className="release-tracks">
                    {tracks}
                </ol>
            </article>
        );
    }
}

ReleaseTracks.propTypes = {
    release: React.PropTypes.object.isRequired
};
