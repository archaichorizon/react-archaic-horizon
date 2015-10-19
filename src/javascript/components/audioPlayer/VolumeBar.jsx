var React = require('react/addons');
var classnames = require('classnames');

var uniqueId = 0;

var VolumeBar = React.createClass({
	
	getInitialState: function() {
		return { hide: true };
	},

	render: function() {
		
		var percent = Math.round(this.props.volume * 100);
		var style = {top: (100 - percent) + "%"};
		var toggleIcon = this.props.volume === 0 ? "volume-off" : "volume-up";

		var audioVolumeBarClasses = classnames({
			'audio-volume-bar': true,
  			'audio-volume-bar-hide': this.state.hide
		});

		var audioVolumeBarContainerId = "audioVolumeBarContainerId" + ++uniqueId;
		var toggleBtnId = "toggleBtn" + ++uniqueId;

		return (
			<div id={audioVolumeBarContainerId} ref="audioVolumeBarContainer" className="audio-volume-bar-container">
				<button id={toggleBtnId} ref="toggleButton" onClick={this.toggle}>
					Toggle Volume
				</button>
				<div className="volume-level">Volume: {percent}</div>
				<div className={audioVolumeBarClasses}>
					<button className="audio-volume-min-max" onClick={this.volumeToMax}>
						Volume Up
					</button>
					<div ref="audioVolumePercentContainer" className="audio-volume-percent-container" onClick={this.adjustVolumeTo}>
						<div className="audio-volume-percent" style={style}></div>
					</div>
					<button className="audio-volume-min-max" onClick={this.volumeToMin}>
						Mute
					</button>
				</div>	
			</div>
		);
	},

	toggle: function() {


		if (this.state.hide) {
			this.setState({
				hide: false
			});
		} else {
			this.setState({
				hide: true
			});
		}

		// when bar open, do nothing if toggle btn press again
		if (this.isToggleBtnPress) {
			this.isToggleBtnPress = false;
			return;
		}

		var hide = !this.state.hide;
		if (hide) {
			return;
		}

		//
		
	},

	adjustVolumeTo: function(e) {
		var container = this.refs.audioVolumePercentContainer.getDOMNode();
		var containerStartY = container.getBoundingClientRect().top;
		var percent = (e.clientY - containerStartY) / container.offsetHeight;	
		percent = 1 - percent;
		// console.log(percent);
		this.props.adjustVolumeTo(percent);
	},

	volumeToMax: function() {
		this.props.adjustVolumeTo(1);
	},

	volumeToMin: function() {
		this.props.adjustVolumeTo(0);
	}

});

module.exports = VolumeBar;