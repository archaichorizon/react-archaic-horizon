var React = require('react/addons');
var classnames = require("classnames");

var ProgressBar = React.createClass({

	render: function() {
		var percent = this.props.percent * 100;
		var style = { width: percent + "%" };
		var classes = classnames({
	  		'audio-progress-container': true,
	  		'audio-progress-container-short-width': this.props.shorter
		});

		return (
			<div ref="progressBar" className={classes} onClick={this.seekTo}>
				<div className="audio-progress" style={style}></div>
			</div>
		);
	},

	seekTo: function(e){
		if (!this.props.percent) {
			return;
		}
		var container = this.refs.progressBar.getDOMNode();
		var containerStartX = container.getBoundingClientRect().left;
		var percent = (e.clientX - containerStartX) / container.offsetWidth;	
		percent = percent >= 1 ? 1 : percent;
		this.props.seekTo(percent);
	}

});

module.exports = ProgressBar;