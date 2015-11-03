import React, {PropTypes} from 'react';
import {secondsToTime} from '../../utils/secondsToTime';

class TimeLabel extends React.Component {

    render () {
        const className = 'audio-time';
        if (this.props.seek === 'undefined' || !this.props.duration) {
            return (
                <span className={className}>00:00 / 00:00</span>
            );
        }

        var seek = secondsToTime(this.props.seek);
        var duration = secondsToTime(this.props.duration);
        return (
            <span className={className}>{seek} / {duration}</span>
        );
    }
}

TimeLabel.propTypes = {
    seek: PropTypes.number,
    duration: PropTypes.number,
};

export default TimeLabel;
