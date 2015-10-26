import React from 'react/addons';
import cx from 'classnames';

import SvgIcon from '../ui/SvgIcon'; 

const props = {
	currentSongIndex: 0,
	songCount: 0,
};

class ButtonPanel extends React.Component {

	renderButton () {
		const isPlaying = this.props.isPlaying && !this.props.isPause;
		const isPause = this.props.isPause && !this.props.isPlaying;
		const isLoading = this.props.isLoading;

		const classNames = cx({
			"player-btn": true,
			"main-btn": true,
			"play-btn": isPause,
			"pause-btn": isPlaying,
			"loading-btn": isLoading,
		});
		// this isn't behaving as expected. need to figure out why.
		// the svg icon doesn't seem to be updating properly
		if (isPlaying && !isLoading) {
			return (
				<button 
					className={classNames} 
					onClick={this.props.onPauseBtnClick}>
						<SvgIcon icon="PAUSE" />
				</button>
			);
		} else if (isLoading) {
			return (
				<button 
					className={classNames}>
						<SvgIcon icon="PAUSE" />
				</button>
			);
		} else {
			return (
				<button 
					className={classNames} 
					onClick={this.props.onPlayBtnClick}>
						<SvgIcon icon="PLAY" />
				</button>
			);
		}
	}

	render () {
		return (
			<div className="button-panel">
				<button 
					className="player-btn" 
					onClick={this.props.onPrevBtnClick}>
						<SvgIcon icon="PREV" />
				</button>
				{this.renderButton()}
				<button 
					className="player-btn" 
					onClick={this.props.onNextBtnClick}>
						<SvgIcon icon="NEXT" />
				</button>
			</div>
		);
	}
};

ButtonPanel.defaultProps = props;

export default ButtonPanel;