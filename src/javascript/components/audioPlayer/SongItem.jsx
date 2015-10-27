var React = require('react/addons');
var classnames = require('classnames');

var SongItem = React.createClass({
	render: function() {

		var currentSongIndex = this.props.currentSongIndex;
		var isSelected = this.props.currentSongIndex == this.props.eventKey;
		var components = [];

		if (isSelected && this.props.isPlaying) {
			components[0] = <strong key={'playing'} className="audio-song-item-icon active">► </strong>;
		} else {
			components[0] = <span key={'not-playing'} className="audio-song-item-not-selected"></span>;
		}

		components[1] = <span key={'track-name'} className="audio-song-item-label" >{this.props.name}</span>;
		
		var classes = classnames({
	  		'audio-song-item': true,
	  		'active': isSelected,
		});

		return (
			<div className={classes} eventKey={this.props.eventKey} onClick={this.props.onSongItemClick} > 
				{ components }
			</div>
		);
	}
});
module.exports = SongItem;