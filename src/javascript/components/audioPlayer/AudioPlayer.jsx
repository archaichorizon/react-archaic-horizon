var React = require('react/addons');
var ButtonPanel = require("./ButtonPanel.jsx");
var ProgressBar = require("./ProgressBar.jsx");
var VolumeBar = require("./VolumeBar.jsx");
var TimeLabel = require("./TimeLabel.jsx");
var NameLabel = require("./NameLabel.jsx");
var SongList = require("./SongList.jsx");
// var AppPlayerStore = require('../../stores/AppPlayerStore');
var Howl = require('../../vendor/howler.core').Howl;

var AudioPlayer = React.createClass({

	getInitialState:function() {
		return {
			isPlaying: false,
			isPause: false,
			isLoading: false,
			currentSongIndex: -1,
			volume: 0.8
		};
	},

	componentWillMount: function() {
        // AppPlayerStore.addChangeListener(this._onStoreChange);

		if (this.props.playlist) {
			this.setState({ 
				songs: this.props.playlist,
				currentSongIndex: 0 
			});
		} else {
			throw "no data";
		}
	},

	_onStoreChange: function() {
		// console.log('change');
    },

	componentDidUpdate: function(prevProps, prevState, prevContext) {
		if (this.state.isPlaying && this.state.currentSongIndex != prevState.currentSongIndex) {
			this.initSoundObject();
		}
	},

	render: function() {

		var songCount = this.songCount();
		var percent = 0;
		if (this.state.seek && this.state.duration) {
			percent = this.state.seek / this.state.duration;
		}

		var songName;
		if (this.songCount() > 1) {
			var songList = (
				<SongList ref="songList" 
					songs={this.state.songs}
					currentSongIndex={this.state.currentSongIndex} 
					isPlaying={this.state.isPlaying} isPause={this.state.isPause} 
					onSongItemClick={this.onSongItemClick}/>
			);
			songName = (this.state.currentSongIndex + 1) + ". " + this.getCurrentSongName();
		} else {
			songName = this.getCurrentSongName();
		}
		
		return (
			<div className="audio-player">		
				<div className="audio-desc-container clearfix">
					<NameLabel name={songName} />
					<TimeLabel seek={this.state.seek} duration={this.state.duration}/>
				</div>
				<div className="clearfix">
					<ButtonPanel isPlaying={this.state.isPlaying} 
						isPause={this.state.isPause}
						isLoading={this.state.isLoading}
						currentSongIndex={this.state.currentSongIndex} 
						songCount={songCount}
						onPlayBtnClick={this.onPlayBtnClick} 
						onPauseBtnClick={this.onPauseBtnClick}
						onPrevBtnClick={this.onPrevBtnClick} 
						onNextBtnClick={this.onNextBtnClick} />
					<ProgressBar 
						shorter={songCount > 1} 
						percent={percent} 
						seekTo={this.seekTo} />
					<VolumeBar 
						volume={this.state.volume} 
						adjustVolumeTo={this.adjustVolumeTo} />
					{/*songList*/}
				</div>
			</div>
		);
	},

	getSongName: function(song) {
		if (song.hasOwnProperty("title")) {
			return song.title;
		} else {
			return "Untitled";
		}
	},

	onPlayBtnClick: function() {
		if (this.state.isPlaying && !this.state.isPause) {
			return;
		}
		this.play();
	},

	onPauseBtnClick: function() {
		var isPause = !this.state.isPause;
		this.setState({ 
			isPause: isPause 
		});
		isPause ? this.pause() : this._play();
	},

	onPrevBtnClick: function() {
		this.prev();
	},

	onNextBtnClick: function() {
		this.next();
	},

 	onSongItemClick: function(songIndex) {
 		// handle pause/playing state.
 		if (this.state.currentSongIndex == songIndex) {
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
			isPause: false
		});
 		// this.refs.songList.hideDropdownMenu();

 	},

	play: function() {
		this.setState({ 
			isPlaying: true, 
			isPause: false 
		});

		if (!this.howler) {
			this.initSoundObject();
		} else {
			var songUrl = encodeURI(this.state.songs[this.state.currentSongIndex].stream);
			var howlerSongUrl = this.howler._src;

			if (songUrl != howlerSongUrl) {
				this.initSoundObject();
			} else {
				this._play();
			}
		}
	},

	initSoundObject: function() {
		this.clearSoundObject();
		this.setState({ 
			isLoading: true 
		});

		var song = this.state.songs[this.state.currentSongIndex];
		this.howler = new Howl({
			src: encodeURI(song.stream),
			urls: [encodeURI(song.stream)],
			volume: this.state.volume,
			onload: this.initSoundObjectCompleted,
			onend: this.playEnd,
			buffer: true
		});
	},

	clearSoundObject: function() {
 		if (this.howler) {
			this.howler.stop();
			this.howler.unload();
			this.howler = null;
		}
 	},

	initSoundObjectCompleted: function() {
		this._play();
		this.setState({ 
			duration: this.howler.duration(),
			isLoading: false
		});
	},

	_play: function() {
		this.howler.play();
		this.stopUpdateCurrentDuration();
		this.updateCurrentDuration();
		this.interval = setInterval(this.updateCurrentDuration, 500);
	},

	playEnd: function() {
		if(this.state.currentSongIndex == this.state.songs.length - 1) {
			this.stop();
		} else {
			this.next();
		}
	},

	stop: function() {
		this.stopUpdateCurrentDuration();
		this.setState({ 
			seek: 0, 
			isPlaying: false 
		});
	},

	pause: function() {
		this.howler.pause();
		this.stopUpdateCurrentDuration();
	},

	prev: function() {
		if (this.state.seek > 1 || this.state.currentSongIndex === 0) {
			this.seekTo(0);
		} else {
			this.updateSongIndex(this.state.currentSongIndex - 1);
		}
	},

	next: function() {
		this.updateSongIndex(this.state.currentSongIndex + 1);
	},

	updateSongIndex: function(index) {
		this.setState({ 
			currentSongIndex: index,
			duration: 0
		});
		if (this.state.isPause) {
			this.stop();
			this.clearSoundObject();
		} else {
			this.stopUpdateCurrentDuration();
		}
	},

	updateCurrentDuration: function() {
		this.setState({ 
			seek: this.howler.seek() 
		});
	},

	stopUpdateCurrentDuration: function() {
		clearInterval(this.interval);
	},

	seekTo: function(percent) {
		var seek = this.state.duration * percent;
		this.howler.seek(seek);
		this.setState({ 
			seek: seek 
		});
	},

	adjustVolumeTo: function(percent) {
		this.setState({ volume: percent });
		if (this.howler) {
			this.howler.volume(percent);
		}
	},

	songCount: function() {
		return this.state.songs ? this.state.songs.length : 0;
	},

	getCurrentSongName: function() {
		if (this.state.currentSongIndex < 0) {
			return "";
		}
		var song = this.state.songs[this.state.currentSongIndex];
		return this.getSongName(song);
 	}

});

module.exports = AudioPlayer;
