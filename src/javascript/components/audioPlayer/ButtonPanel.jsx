import React from 'react/addons';

import SvgIcon from '../ui/SvgIcon'; 

const props = {
	currentSongIndex: 0,
	songCount: 0,
};

class ButtonPanel extends React.Component {

	render () {
		const isPlaying = this.props.isPlaying;
		const isPause = this.props.isPause;
		const isLoading = this.props.isLoading;
		const showPlayButton = !isPlaying || isPause;
		const buttonClickHandler = showPlayButton ? this.props.onPlayBtnClick : this.props.onPauseBtnClick;
		let iconName;
		let iconClasses = "";
		let loading = "";
		let playState;

		if (isLoading) {
			loading =  "Loading";
			iconName = "refresh";
			iconClasses = "refresh-animate";
		} else {
			loading =  "";
			playState = showPlayButton ? <SvgIcon icon="PLAY" /> : <SvgIcon icon="PAUSE" />;
		}

		const songIndex = this.props.currentSongIndex;

		if (this.props.songCount < 2) {
			return (
				<button onClick={buttonClickHandler}>{playState}</button>
			);
		} else {

			const nextButtonClass = songIndex == this.props.songCount - 1 ? "disabled" : "";
			
			return (
				<div className="button-panel">
					{/*<div>{loading}</div>*/}
					<button className="player-btn" onClick={this.props.onPrevBtnClick}>
						<SvgIcon icon="PREV" />
					</button>
					<button className="player-btn" onClick={buttonClickHandler}>
						{playState}
					</button>
					<button onClick={this.props.onNextBtnClick} className={nextButtonClass + ' player-btn'}>
						<SvgIcon icon="NEXT" />
					</button>
				</div>
			);
		}
	}
};

ButtonPanel.defaultProps = props;

export default ButtonPanel;