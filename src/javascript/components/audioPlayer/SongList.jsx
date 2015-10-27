var React = require('react/addons');
var SongItem = require("./SongItem.jsx");
var classnames = require('classnames');

var SongList = React.createClass({

	getInitialState: function() {
		return {
			playlistVisible: false
		};
	},

	getSongName: function(song) {
		if (song.hasOwnProperty("title")) {
			return song.title;
		} else {
			return "Untitled";
		}
	},

	handleClick: function() {
		this.setState({
			playlistVisible: !this.state.playlistVisible ? true : false
		});
	},

	render: function() {

		var songs = [];
		var currentSongIndex = this.props.currentSongIndex;
		var isPlaying = this.props.isPlaying;
		var isPause = this.props.isPause;
		var songCount = this.props.songs.length;

		songs = this.props.songs.map(function(song, index){

			var songName = this.getSongName(song);
			var songName = songCount > 1 ? (index + 1) + ". " + songName : songName;

			return <SongItem currentSongIndex={currentSongIndex} 
				key={'song-' + index}
				eventKey={index} 
				name={songName}
				isPlaying={isPlaying} 
				isPause={isPause} 
				onSongItemClick={this.props.onSongItemClick.bind(null, index)} /> ;
		}, this);

		var playlistClasses = classnames({
			'playlist': true,
  			'playlist-hidden': !this.state.playlistVisible
		});

		return (
			<div>
				<button onClick={this.handleClick}>Toggle Playlist</button>
				<div className={playlistClasses}>
					{songs}
				</div>
			</div>
		);
	},

	hideDropdownMenu: function() {
		this.refs.dropdownButton.setDropdownState(false);
	}

});

module.exports = SongList;