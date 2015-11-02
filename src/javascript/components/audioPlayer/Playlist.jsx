import React, {PropTypes} from 'react';
import PlaylistItem from './PlaylistItem.jsx';
import cx from 'classnames';

class Playlist extends React.Component {

    getSongName (song) {
        if (song.hasOwnProperty('title')) {
            return song.title;
        }
        return 'Untitled';
    }

    renderSongs () {
        const currentSongIndex = this.props.currentSongIndex;
        const isPlaying = this.props.isPlaying;
        const isPause = this.props.isPause;
        // const songCount = this.props.songs.length;

        const songs = this.props.songs.map((song, index) => {
            let songName = this.getSongName(song);
            // let songName = songCount > 1 ? (index + 1) + '. ' + songName : songName;

            return (
                <PlaylistItem
                    currentSongIndex={currentSongIndex}
                    key={'song-' + index}
                    eventKey={index}
                    name={songName}
                    isPlaying={isPlaying}
                    isPause={isPause}
                    duration={this.props.duration}
                    onPlaylistItemClick={this.props.onPlaylistItemClick.bind(null, index)} />);
        }, this);

        return songs;
    }

    render () {
        var playlistClasses = cx({
            playlist: true,
            'is-hidden': !this.props.isPlaylistVisible
        });

        return (
            <ol className={playlistClasses}>
                {this.renderSongs()}
            </ol>
        );
    }
}

Playlist.propTypes = {
    onPlaylistItemClick: PropTypes.func.isRequired,
    currentSongIndex: PropTypes.number.isRequired,
    isPlaylistVisible: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPause: PropTypes.bool.isRequired,
    songs: PropTypes.array.isRequired,
};

export default Playlist;
