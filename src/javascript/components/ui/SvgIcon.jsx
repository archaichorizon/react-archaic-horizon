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
			case 'PLAY':
				this.width = 16;
				this.height = 16;
				this.path = 'M2.1,0.1L14,7c0.7,0.4,0.7,1.5,0,1.9L2.1,15.9c-0.7,0.4-1.7-0.1-1.7-1V1.1C0.4,0.3,1.3-0.3,2.1,0.1z';
				this.class = 'play';
				break;
			case 'PAUSE':
				this.width = 16;
				this.height = 16;
				this.path = `M4.8,16H2.4c-0.8,0-1.5-0.7-1.5-1.5V1.5C0.9,0.7,1.5,0,2.4,0h2.4c0.8,0,1.5,0.7,1.5,1.5v13.1C6.2,15.3,5.6,16,4.8,16z
	 M15.1,14.5V1.5c0-0.8-0.7-1.5-1.5-1.5h-2.4c-0.8,0-1.5,0.7-1.5,1.5v13.1c0,0.8,0.7,1.5,1.5,1.5h2.4C14.5,16,15.1,15.3,15.1,14.5z`;
				this.class = 'pause';
				break;

			case 'PREV':
				this.width = 20;
				this.height = 16;
				this.path = `M1.1,16h0.7c0.5,0,0.9-0.4,0.9-0.9V8.6l6.9,7.2c0.4,0.4,1.1,0.1,1.1-0.5V8.6l6.9,7.2c0.4,0.4,1.1,0.1,1.1-0.5V0.7
	c0-0.6-0.7-0.9-1.1-0.5l-6.9,7.2V0.7c0-0.6-0.6-0.9-1.1-0.5L2.8,7.4V0.9C2.8,0.4,2.4,0,1.9,0L1.1,0C0.6,0,0.2,0.4,0.2,0.9v14.2
	C0.2,15.6,0.6,16,1.1,16z`;
				this.class = 'prev';
				break;
				
			case 'NEXT':
				this.width = 20;
				this.height = 16;
				this.path = `M17.9,0h-0.7c-0.5,0-0.9,0.4-0.9,0.9v6.5L9.3,0.2C8.9-0.2,8.2,0.1,8.2,0.7v6.7L1.3,0.2C0.9-0.2,0.2,0.1,0.2,0.7v14.6
	c0,0.6,0.7,0.9,1.1,0.5l6.9-7.2v6.7c0,0.6,0.6,0.9,1.1,0.5l6.9-7.2v6.5c0,0.5,0.4,0.9,0.9,0.9h0.7c0.5,0,0.9-0.4,0.9-0.9V0.9
	C18.8,0.4,18.4,0,17.9,0z`;
				this.class = 'next';
				break;

			case 'VOLUME':
				this.width = 20;
				this.height = 16;
				this.path = `M8.1,2.5v10.3c0,0.6-0.5,1-0.9,0.7l-4-3.2H0.7c-0.3,0-0.5-0.2-0.5-0.5V5.4c0-0.3,0.2-0.5,0.5-0.5h2.6l4-3.2
	C7.6,1.4,8.1,1.8,8.1,2.5z M14.5,0.1c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c1.9,1.9,3,4.5,3,7.2s-1.1,5.3-3,7.2
	c-0.2,0.2-0.2,0.5,0,0.7C14,16,14.1,16,14.2,16s0.2,0,0.3-0.1C18.9,11.5,18.9,4.5,14.5,0.1z M12.6,1.9c-0.2-0.2-0.5-0.2-0.7,0
	s-0.2,0.5,0,0.7c3,3,3,7.8,0,10.8c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1C15.9,10.7,15.9,5.3,12.6,1.9z
	 M10.6,3.7c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c1,1,1.5,2.3,1.5,3.6s-0.5,2.7-1.5,3.6c-0.2,0.2-0.2,0.5,0,0.7
	c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1C12.9,9.9,12.9,6.1,10.6,3.7z`
				this.class = 'volume';
				break;
			default:
				
		}
	}
	
    render () {
        return (
            <svg version="1.1" 
            	width={this.width} 
            	height={this.height} 
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
};

export default SvgIcon;