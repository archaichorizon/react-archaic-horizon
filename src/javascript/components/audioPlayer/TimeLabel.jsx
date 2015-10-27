var React = require('react/addons');

var TimeLabel = React.createClass({

	secondsToTime: function(secs) {
		secs = Math.round(secs);
        var hours = Math.floor(secs / (60 * 60));

        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        var time = "";

        if (hours > 0) {
          time += hours + ":";
        }

        time += this.timeUnitFormat(minutes) + ":";
        time += this.timeUnitFormat(seconds);
        return time; 
	},

    timeUnitFormat:function(time) {
        if (time < 1) {
            return "00";
        } else if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    },
	
	render: function() {
		var classes = "audio-time pull-right";
		if (this.props.seek === undefined || !this.props.duration) {
			return (
				<span className={classes}>00:00 / 00:00</span>
			);
		}

		var seek = this.secondsToTime(this.props.seek);
		var duration = this.secondsToTime(this.props.duration);
		return (
			<span className={classes}>{seek} / {duration}</span>
		);
	}

});

module.exports = TimeLabel;