import React, {PropTypes} from 'react';
import cx from 'classnames';

class ProgressBar extends React.Component {

    constructor () {
        super();
        this.state = {
            seekBarPercent: 0,
            seekBarVisible: false,
        };
    }

    seekTo (e) {
        if (!this.props.percent) {
            return;
        }
        const container = this.refs.progressBar;
        const containerStartX = container.getBoundingClientRect().left;
        let percent = (e.clientX - containerStartX) / container.offsetWidth;
        percent = percent >= 1 ? 1 : percent;
        this.props.seekTo(percent);
    }

    seekVisual (e) {
        if (!this.props.percent) {
            return;
        }
        const container = this.refs.progressBar;
        const containerStartX = container.getBoundingClientRect().left;
        let percent = (e.clientX - containerStartX) / container.offsetWidth;
        percent = percent >= 1 ? 1 : percent;
        this.setState({
            seekBarPercent: percent,
            seekBarVisible: true,
        });
    }

    seekBarHide () {
        this.setState({
            seekBarVisible: false,
        });
    }

    render () {
        const progressStyle = {
            width: this.props.percent * 100 + '%',
            backgroundColor: this.props.color,
        };
        const seekStyle = {
            display: this.state.seekBarVisible ? 'block' : 'none',
            width: `${this.state.seekBarPercent * 100}%`,
            backgroundColor: 'rgba(0,0,0,.25)',
        };
        const classes = cx({
            'progress-container': true,
        });
        return (
            <div
                ref="progressBar"
                className={classes}
                onClick={this.seekTo.bind(this)}
                onMouseMove={this.seekVisual.bind(this)}
                onMouseOut={this.seekBarHide.bind(this)}>
                <div className="progress" style={progressStyle} />
                <div className="seek-bar" ref="seekBar" style={seekStyle} />
            </div>
        );
    }
}

ProgressBar.defaultProps = {
    color: '#ccc'
};

ProgressBar.propTypes = {
    color: PropTypes.string,
    percent: PropTypes.number,
    seekTo: PropTypes.func,
};

export default ProgressBar;
