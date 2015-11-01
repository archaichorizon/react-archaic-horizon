import React, {PropTypes} from 'react';

class TimeLabel extends React.Component {

    secondsToTime (secs) {
        secs = Math.round(secs);
        const hours = Math.floor(secs / (60 * 60));

        const divisorForMinutes = secs % (60 * 60);
        const minutes = Math.floor(divisorForMinutes / 60);

        const divisorForSeconds = divisorForMinutes % 60;
        const seconds = Math.ceil(divisorForSeconds);

        let time = '';

        if (hours > 0) {
            time += hours + ':';
        }

        time += this.timeUnitFormat(minutes) + ':';
        time += this.timeUnitFormat(seconds);

        return time;
    }

    timeUnitFormat (time) {
        if (time < 1) {
            return '00';
        } else if (time < 10) {
            return '0' + time;
        }
        return time;
    }

    render () {
        const className = 'audio-time';
        if (this.props.seek === 'undefined' || !this.props.duration) {
            return (
                <span className={className}>00:00 / 00:00</span>
            );
        }

        var seek = this.secondsToTime(this.props.seek);
        var duration = this.secondsToTime(this.props.duration);
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
