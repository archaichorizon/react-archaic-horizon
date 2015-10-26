var React = require('react/addons');

var NameLabel = React.createClass({
	render: function() {
		return (
			<div className="name-label"><strong>{this.props.name}</strong></div>
		);
	}
});

module.exports = NameLabel;