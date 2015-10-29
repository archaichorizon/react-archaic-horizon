import React, {PropTypes} from 'react';

class NameLabel extends React.Component {
	render () {
		return (
			<div className="name-label"><strong>{this.props.name}</strong></div>
		);
	}
}

NameLabel.propTypes = {
    name: PropTypes.string.isRequired,
}

export default NameLabel;
