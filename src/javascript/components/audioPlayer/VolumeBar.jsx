import React, {PropTypes} from 'react';
import cx from 'classnames';
import SvgIcon from '../ui/SvgIcon';

let uniqueId = 0;

class VolumeBar extends React.Component {

    constructor () {
        super();

        this.state = {
            hide: true
        };

        this.toggle = this.toggle.bind(this);
        this.adjustVolumeTo = this.adjustVolumeTo.bind(this).
        this.volumeToMax = this.volumeToMax.bind(this);
        this.volumeToMin = this.volumeToMin.bind(this);
    }

    toggle () {
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
    }

    adjustVolumeTo (e) {
        var container = this.refs.audioVolumePercentContainer.getDOMNode();
        var containerStartY = container.getBoundingClientRect().top;
        var percent = (e.clientY - containerStartY) / container.offsetHeight;
        percent = 1 - percent;
        // console.log(percent);
        this.props.adjustVolumeTo(percent);
    }

    volumeToMax () {
        this.props.adjustVolumeTo(1);
    }

    volumeToMin () {
        this.props.adjustVolumeTo(0);
    }

    render () {
        var percent = Math.round(this.props.volume * 100);
        var style = {top: `${(100 - percent)}%`};

        var audioVolumeBarClasses = cx({
            'volume-bar': true,
            'volume-bar-hide': this.state.hide
        });

        var audioVolumeBarContainerId = `audioVolumeBarContainerId ${++uniqueId}`;
        var toggleBtnId = `toggleBtn ${++uniqueId}`;

        return (
            <div id={audioVolumeBarContainerId} ref="audioVolumeBarContainer" className="volume-bar-container">
                <button id={toggleBtnId} ref="toggleButton" onClick={this.toggle}>
                    <SvgIcon icon="VOLUME" />
                </button>
                {/* <div className="volume-level">Volume: {percent}</div> */}
                <div className={audioVolumeBarClasses}>
                    <button className="volume-max" onClick={this.volumeToMax}>
                        100
                    </button>
                    <div ref="audioVolumePercentContainer" className="volume-percent-container" onClick={this.adjustVolumeTo}>
                        <div className="volume-percent" style={style}></div>
                    </div>
                    <button className="volume-mute" onClick={this.volumeToMin}>
                        Mute
                    </button>
                </div>
            </div>
        );
    }
}

VolumeBar.propTypes = {
    volume: PropTypes.number.isRequired,
    adjustVolumeTo: PropTypes.func.isRequired
};

export default VolumeBar;
