import React, {PropTypes} from 'react';

class SvgIcon extends React.Component {

	constructor (props) {
		super(props);
		switch (this.props.icon) {
			case 'ARROW_RIGHT_SMALL':
				this.path = 'M3.5,0.9l10.8,6.3c0.7,0.4,0.7,1.4,0,1.7L3.5,15.1C2.8,15.5,2,15,2,14.3V1.7C2,1,2.8,0.5,3.5,0.9z';
				this.class = 'arrow-right-small';
				break;
			case 'ARROW_LEFT_SMALL':
				this.path = 'M12.3,15.1L1.4,8.9c-0.7-0.4-0.7-1.4,0-1.7l10.8-6.3c0.7-0.4,1.5,0.1,1.5,0.9v12.5C13.8,15,12.9,15.5,12.3,15.1z';
				this.class = 'arrow-left-small';
				break;
			default:
				
		}
	}
	
    render () {
        return (
            <svg version="1.1" 
            	width={this.props.width} 
            	height={this.props.height} 
            	className={this.class} 
            	viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                <path fill={this.props.color} d={this.path}/>
            </svg>
        );  
    }
};

SvgIcon.defaultProps = {
	icon: 'DEFAULT',
    color: '#FFFFFF',
    height: 16,
	width: 16,
};

SvgIcon.contextTypes = {
	icon: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
	width: PropTypes.number,
};

export default SvgIcon;