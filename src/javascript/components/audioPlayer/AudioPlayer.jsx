import React, {PropTypes} from 'react';
import ButtonPanel from './ButtonPanel.jsx';
import ProgressBar from './ProgressBar.jsx';
import VolumeBar from './VolumeBar.jsx';
import TimeLabel from './TimeLabel.jsx';
import NameLabel from './NameLabel.jsx';
import SongList from './SongList.jsx';
// import AppPlayerStore from '../../stores/AppPlayerStore';
import {Howl} from '../../vendor/howler.core';

class AudioPlayer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isPlaying: false,
            isPause: false,
            isLoading: false,
            currentSongIndex: -1,
            volume: 0.5
        };

        this.getSongName = this.getSongName.bind(this);
        this.onPlayBtnClick = this.onPlayBtnClick.bind(this);
        this.onPauseBtnClick = this.onPauseBtnClick.bind(this);
        this.onPrevBtnClick = this.onPrevBtnClick.bind(this);
        this.onNextBtnClick = this.onNextBtnClick.bind(this);
        this.onSongItemClick = this.onSongItemClick.bind(this);

        this.play = this.play.bind(this);
        this.initSoundObject = this.initSoundObject.bind(this);
        this.initSoundObjectCompleted = this.initSoundObjectCompleted.bind(this);
        this.clearSoundObject = this.clearSoundObject.bind(this);

        this._play = this._play.bind(this);
        this.playEnd = this.playEnd.bind(this);
        this.stop = this.stop.bind(this);
        this.pause = this.pause.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);

        this.updateSongIndex = this.updateSongIndex.bind(this);
        this.updateCurrentDuration = this.updateCurrentDuration.bind(this);
        this.stopUpdateCurrentDuration = this.stopUpdateCurrentDuration.bind(this);
        this.seekTo = this.seekTo.bind(this);
        this.adjustVolumeTo = this.adjustVolumeTo.bind(this);
        this.songCount = this.songCount.bind(this);
        this.getCurrentSongName = this.getCurrentSongName.bind(this);
    }

    componentWillMount () {
        if (this.props.playlist) {
            this.setState({
                songs: this.props.playlist,
                currentSongIndex: 0,
            });
        }
    }

    componentWillReceiveProps (prevProps) {
        if (prevProps.playlist !== this.props.playlist) {
            this.setState({
                songs: this.props.playlist,
                currentSongIndex: 0,
            });
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.isPlaying && this.state.currentSongIndex !== prevState.currentSongIndex) {
            this.initSoundObject();
        }
    }

    getSongName (song) {
        if (song.hasOwnProperty('title')) {
            return song.title;
        }
        return 'No Title';
    }

    onPlayBtnClick () {
        if (this.state.isPlaying && !this.state.isPause) {
            return;
        }
        this.play();
    }

    onPauseBtnClick () {
        const isPlaying = !this.state.isPlaying;
        const isPause = !this.state.isPause;
        this.setState({
            isPlaying: isPlaying,
            isPause: isPause,
        });
        this.pause();
    }

    onPrevBtnClick () {
        this.prev();
    }

    onNextBtnClick () {
        this.next();
    }

    onSongItemClick (songIndex) {
        // handle pause/playing state.
        if (this.state.currentSongIndex === songIndex) {
            if (this.state.isPause) {
                this.onPauseBtnClick();
                // this.refs.songList.hideDropdownMenu();
            } else if (!this.state.isPlaying) {
                this.onPlayBtnClick();
                // this.refs.songList.hideDropdownMenu();
            }
            return;
        }

        // handle index change state, it must change to play.
        this.stop();
        this.clearSoundObject();
        this.setState({
            currentSongIndex: songIndex,
            duration: 0,
            isPlaying: true,
            isPause: false,
        });
        // this.refs.songList.hideDropdownMenu();
    }

    play () {
        this.setState({
            isPlaying: true,
            isPause: false,
        });

        if (!this.howler) {
            this.initSoundObject();
        } else {
            const songUrl = encodeURI(this.state.songs[this.state.currentSongIndex].stream);
            const howlerSongUrl = this.howler._src;

            if (songUrl !== howlerSongUrl) {
                this.initSoundObject();
            } else {
                this._play();
            }
        }
    }

    initSoundObject () {
        this.clearSoundObject();
        this.setState({
            isLoading: true
        });

        const song = this.state.songs[this.state.currentSongIndex];
        this.howler = new Howl({
            src: encodeURI(song.stream),
            urls: [encodeURI(song.stream)],
            volume: this.state.volume,
            onload: this.initSoundObjectCompleted,
            onend: this.playEnd,
            html5: true,
            preload: true,
        });
    }

    clearSoundObject () {
        if (this.howler) {
            this.howler.stop();
            this.howler.unload();
            this.howler = null;
        }
    }

    initSoundObjectCompleted () {
        this._play();
        this.setState({
            duration: this.howler.duration(),
            isLoading: false,
        });
    }

    _play () {
        this.howler.play();
        this.stopUpdateCurrentDuration();
        this.updateCurrentDuration();
        this.interval = setInterval(this.updateCurrentDuration, 500);
    }

    playEnd () {
        if (this.state.currentSongIndex === this.state.songs.length - 1) {
            this.stop();
        } else {
            this.next();
        }
    }

    stop () {
        this.stopUpdateCurrentDuration();
        this.setState({
            seek: 0,
            isPlaying: false,
        });
    }

    pause () {
        this.howler.pause();
        this.stopUpdateCurrentDuration();
    }

    prev () {
        if (this.state.seek > 1 || this.state.currentSongIndex === 0) {
            this.seekTo(0);
        } else {
            this.updateSongIndex(this.state.currentSongIndex - 1);
        }
    }

    next () {
        this.updateSongIndex(this.state.currentSongIndex + 1);
    }

    updateSongIndex (index) {
        this.setState({
            currentSongIndex: index,
            duration: 0,
        });
        if (this.state.isPause) {
            this.stop();
            this.clearSoundObject();
        } else {
            this.stopUpdateCurrentDuration();
        }
    }

    updateCurrentDuration () {
        this.setState({
            seek: this.howler.seek()
        });
    }

    stopUpdateCurrentDuration () {
        clearInterval(this.interval);
    }

    seekTo (percent) {
        const seek = this.state.duration * percent;
        this.howler.seek(seek);
        this.setState({
            seek: seek
        });
    }

    adjustVolumeTo (percent) {
        this.setState({
            volume: percent
        });
        if (this.howler) {
            this.howler.volume(percent);
        }
    }

    songCount () {
        return this.state.songs ? this.state.songs.length : 0;
    }

    getCurrentSongName () {
        if (this.state.currentSongIndex < 0) {
            return '';
        }
        const song = this.state.songs[this.state.currentSongIndex];
        return this.getSongName(song);
    }

    render () {
        const songCount = this.songCount();
        let percent = 0;

        if (this.state.seek && this.state.duration) {
            percent = this.state.seek / this.state.duration;
        }

        let songName;
        if (this.songCount() > 1) {
            const songList = (
                <SongList ref="songList"
                    songs={this.state.songs}
                    currentSongIndex={this.state.currentSongIndex}
                    isPlaying={this.state.isPlaying} isPause={this.state.isPause}
                    onSongItemClick={this.onSongItemClick}/>
            );
            songName = `${(this.state.currentSongIndex + 1)}. ${this.getCurrentSongName()}`;
        } else {
            songName = this.getCurrentSongName();
        }
        return (
            <div className="audio-player">
                <ButtonPanel
                    isPlaying={this.state.isPlaying}
                    isPause={this.state.isPause}
                    isLoading={this.state.isLoading}
                    currentSongIndex={this.state.currentSongIndex}
                    songCount={songCount}
                    onPlayBtnClick={this.onPlayBtnClick}
                    onPauseBtnClick={this.onPauseBtnClick}
                    onPrevBtnClick={this.onPrevBtnClick}
                    onNextBtnClick={this.onNextBtnClick} />
                <NameLabel
                    name={songName} />
                <ProgressBar
                    color={this.props.mood.accent[0]}
                    shorter={songCount > 1}
                    percent={percent}
                    seekTo={this.seekTo} />
                <TimeLabel
                    seek={this.state.seek}
                    duration={this.state.duration} />
                <VolumeBar
                    volume={this.state.volume}
                    adjustVolumeTo={this.adjustVolumeTo} />
                {/* songList */}
            </div>
        );
    }

}

AudioPlayer.propTypes = {
    playlist: PropTypes.array.isRequired,
    mood: PropTypes.object,
};

export default AudioPlayer;
