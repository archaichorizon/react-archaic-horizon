import React, {PropTypes} from 'react';

class NameLabel extends React.Component {
	render () {
		return (
			<div className="name-label">
                <div className="title">{this.props.title}</div>
                <div className="artist">{this.props.artist}</div>
            </div>
		);
	}
}

NameLabel.propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
};

export default NameLabel;
