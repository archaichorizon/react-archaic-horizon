import React, {PropTypes} from 'react';
import cx from 'classnames';
import SvgIcon from '../ui/SvgIcon';

class ButtonPanel extends React.Component {

    renderButton () {
        const isPlaying = this.props.isPlaying && !this.props.isPause;
        const isPause = this.props.isPause && !this.props.isPlaying;
        const isLoading = this.props.isLoading;

        const classNames = cx({
            'player-btn': true,
            'main-btn': true,
            'play-btn': isPause,
            'pause-btn': isPlaying,
            'loading-btn': isLoading,
        });
        // TODO: this isn't behaving as expected. need to figure out why.
        // the svg icon doesn't seem to be updating properly
        // Note: fixed with `componentDidUpdate` in SvgIcon
        return (
            <button
                className={classNames}
                onClick={isPlaying && !isLoading ? this.props.onPauseBtnClick : this.props.onPlayBtnClick}>
                    <SvgIcon icon={isPlaying && !isLoading ? 'PAUSE' : 'PLAY'} />
            </button>
        );
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
}

ButtonPanel.defaultProps = {
    currentSongIndex: 0,
    songCount: 0,
};

ButtonPanel.propTypes = {
    currentSongIndex: PropTypes.number.isRequired,
    songCount: PropTypes.number.isRequired,
    onPauseBtnClick: PropTypes.func.isRequired,
    onPlayBtnClick: PropTypes.func.isRequired,
    onPrevBtnClick: PropTypes.func.isRequired,
    onNextBtnClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPause: PropTypes.bool.isRequired,
};

export default ButtonPanel;
