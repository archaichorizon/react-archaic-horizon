var React = require('react/addons');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			currentSongIndex: 0,
			songCount: 0
		};
	},

	render: function() {
		var isPlaying = this.props.isPlaying;
		var isPause = this.props.isPause;
		var isLoading = this.props.isLoading;
		var isShowPlayBtn = !isPlaying || isPause;
		var buttonClickHandler = isShowPlayBtn ? this.props.onPlayBtnClick : this.props.onPauseBtnClick;
		var iconName;
		var iconClasses = "";
		var loading = "";
		var playState;

		if (isLoading) {
			loading =  "Loading";
			iconName = "refresh";
			iconClasses = "audio-refresh-animate";
		} else {
			loading =  "";
			playState = isShowPlayBtn ? "Play" : "Pause";
		}

		var songIndex = this.props.currentSongIndex;
		var buttonPanelClasses = "audio-button-panel pull-left";

		if (this.props.songCount < 2) {
			return (
				<button onClick={buttonClickHandler}>{playState}</button>
			);
		} else {

			var nextButtonClass = songIndex == this.props.songCount - 1 ? "disabled" : "";
			
			return (
				<div>
					<div>{loading}</div>
					<button onClick={this.props.onPrevBtnClick}>
						&#x261C;
					</button>
					<button onClick={buttonClickHandler}>
						{playState}
					</button>
					<button onClick={this.props.onNextBtnClick} className={nextButtonClass}>
						&#x261E;
					</button>
				</div>
			);
		}
	}
});