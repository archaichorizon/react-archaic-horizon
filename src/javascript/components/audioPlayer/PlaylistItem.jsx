import React, {PropTypes} from 'react';
import cx from 'classnames';

class PlaylistItem extends React.Component {
    render () {
        // const currentSongIndex = this.props.currentSongIndex;
        const isSelected = this.props.currentSongIndex === this.props.eventKey;
        const isPlaying = isSelected && this.props.isPlaying;

        const classes = cx({
            track: true,
            'is-playing': isPlaying,
            'is-selected': isSelected,
        });

        return (
            <li
                className={classes}
                eventKey={this.props.eventKey}
                onClick={this.props.onPlaylistItemClick}>
                    {isPlaying ? <span key={'playing'} className="is-playing">► </span> : null}
                    <span className="track-title">{this.props.name}</span>
            </li>
        );
    }
}

PlaylistItem.propTypes = {
    onPlaylistItemClick: PropTypes.func.isRequired,
    currentSongIndex: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    eventKey: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default PlaylistItem;
