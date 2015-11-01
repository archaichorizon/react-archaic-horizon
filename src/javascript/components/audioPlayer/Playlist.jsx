import React, {PropTypes} from 'react';
import SongItem from './SongItem.jsx';
import cx from 'classnames';

class Playlist extends React.Component {

    constructor () {
        super();
        this.state = {
            playlistVisible: false
        };
    }

    getSongName (song) {
        if (song.hasOwnProperty('title')) {
            return song.title;
        }
        return 'Untitled';
    }

    handleClick () {
        this.setState({
            playlistVisible: !this.state.playlistVisible
        });
    }

    hideDropdownMenu () {
        this.refs.dropdownButton.setDropdownState(false);
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
                <SongItem currentSongIndex={currentSongIndex}
                    key={'song-' + index}
                    eventKey={index}
                    name={songName}
                    isPlaying={isPlaying}
                    isPause={isPause}
                    onSongItemClick={this.props.onSongItemClick.bind(null, index)} />);
        }, this);

        return songs;
    }

    render () {
        var playlistClasses = cx({
            playlist: true,
            'playlist-hidden': !this.state.playlistVisible
        });

        return (
            <div>
                <button className="toggle-playlist" onClick={this.handleClick.bind(this)}>Toggle Playlist</button>
                <div className={playlistClasses}>
                    {this.renderSongs()}
                </div>
            </div>
        );
    }
}

Playlist.propTypes = {
    onSongItemClick: PropTypes.func.isRequired,
    currentSongIndex: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPause: PropTypes.bool.isRequired,
    songs: PropTypes.array.isRequired,
};

export default Playlist;
