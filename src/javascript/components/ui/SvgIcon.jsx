import React, {PropTypes} from 'react';

class SvgIcon extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            path: '',
            className: '',
        };
    }

    componentWillMount () {
        this.setupIcon();
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.icon !== this.props.icon) {
            this.setupIcon();
            this.forceUpdate();
        }
    }

    setupIcon () {
        let width;
        let height;
        let path;
        let className;

        switch (this.props.icon) {
            case 'ARROW_RIGHT_SMALL':
                width = 16;
                height = 16;
                path = 'M3.5,0.9l10.8,6.3c0.7,0.4,0.7,1.4,0,1.7L3.5,15.1C2.8,15.5,2,15,2,14.3V1.7C2,1,2.8,0.5,3.5,0.9z';
                className = 'arrow-right-small';
                break;

            case 'ARROW_LEFT_SMALL':
                width = 16;
                height = 16;
                path = 'M12.3,15.1L1.4,8.9c-0.7-0.4-0.7-1.4,0-1.7l10.8-6.3c0.7-0.4,1.5,0.1,1.5,0.9v12.5C13.8,15,12.9,15.5,12.3,15.1z';
                className = 'arrow-left-small';
                break;

            case 'PLAY_LARGE':
                width = 40;
                height = 40;
                path = 'M7.9,0.3l31.1,18c1.4,0.8,1.4,2.7,0,3.5l-31.1,18c-1.4,0.8-3.1-0.2-3.1-1.8V2C4.8,0.5,6.5-0.5,7.9,0.3z';
                className = 'play-large';
                break;

            case 'PLAY':
                width = 16;
                height = 16;
                path = 'M3.5,0.1L15.4,7c0.7,0.4,0.7,1.5,0,1.9L3.5,15.9c-0.7,0.4-1.7-0.1-1.7-1V1.1C1.9,0.3,2.8-0.3,3.5,0.1z';
                className = 'play';
                break;

            case 'PAUSE':
                width = 16;
                height = 16;
                path = `M4.8,16H2.4c-0.8,0-1.5-0.7-1.5-1.5V1.5C0.9,0.7,1.5,0,2.4,0h2.4c0.8,0,1.5,0.7,1.5,1.5v13.1C6.2,15.3,5.6,16,4.8,16z
                        M15.1,14.5V1.5c0-0.8-0.7-1.5-1.5-1.5h-2.4c-0.8,0-1.5,0.7-1.5,1.5v13.1c0,0.8,0.7,1.5,1.5,1.5h2.4C14.5,16,15.1,15.3,15.1,14.5z`;
                className = 'pause';
                break;

            case 'PREV':
                width = 20;
                height = 16;
                path = `M1.1,16h0.7c0.5,0,0.9-0.4,0.9-0.9V8.6l6.9,7.2c0.4,0.4,1.1,0.1,1.1-0.5V8.6l6.9,7.2c0.4,0.4,1.1,0.1,1.1-0.5V0.7
                        c0-0.6-0.7-0.9-1.1-0.5l-6.9,7.2V0.7c0-0.6-0.6-0.9-1.1-0.5L2.8,7.4V0.9C2.8,0.4,2.4,0,1.9,0L1.1,0C0.6,0,0.2,0.4,0.2,0.9v14.2
                        C0.2,15.6,0.6,16,1.1,16z`;
                className = 'prev';
                break;

            case 'NEXT':
                width = 20;
                height = 16;
                path = `M17.9,0h-0.7c-0.5,0-0.9,0.4-0.9,0.9v6.5L9.3,0.2C8.9-0.2,8.2,0.1,8.2,0.7v6.7L1.3,0.2C0.9-0.2,0.2,0.1,0.2,0.7v14.6
                        c0,0.6,0.7,0.9,1.1,0.5l6.9-7.2v6.7c0,0.6,0.6,0.9,1.1,0.5l6.9-7.2v6.5c0,0.5,0.4,0.9,0.9,0.9h0.7c0.5,0,0.9-0.4,0.9-0.9V0.9
                        C18.8,0.4,18.4,0,17.9,0z`;
                className = 'next';
                break;

            case 'VOLUME':
                width = 20;
                height = 16;
                path = `M8.1,2.5v10.3c0,0.6-0.5,1-0.9,0.7l-4-3.2H0.7c-0.3,0-0.5-0.2-0.5-0.5V5.4c0-0.3,0.2-0.5,0.5-0.5h2.6l4-3.2
                        C7.6,1.4,8.1,1.8,8.1,2.5z M14.5,0.1c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c1.9,1.9,3,4.5,3,7.2s-1.1,5.3-3,7.2
                        c-0.2,0.2-0.2,0.5,0,0.7C14,16,14.1,16,14.2,16s0.2,0,0.3-0.1C18.9,11.5,18.9,4.5,14.5,0.1z M12.6,1.9c-0.2-0.2-0.5-0.2-0.7,0
                        s-0.2,0.5,0,0.7c3,3,3,7.8,0,10.8c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1C15.9,10.7,15.9,5.3,12.6,1.9z
                         M10.6,3.7c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c1,1,1.5,2.3,1.5,3.6s-0.5,2.7-1.5,3.6c-0.2,0.2-0.2,0.5,0,0.7
                        c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1C12.9,9.9,12.9,6.1,10.6,3.7z`;
                className = 'volume';
                break;

            case 'PLAYLIST':
                width = 16;
                height = 16;
                path = `M5,4V2c0-0.3,0.2-0.5,0.5-0.5h10C15.8,1.5,16,1.7,16,2v2c0,0.3-0.2,0.5-0.5,0.5h-10C5.2,4.5,5,4.3,5,4z M1.5,4.5L1.5,4.5
                        C2.3,4.5,3,3.8,3,3v0c0-0.8-0.7-1.5-1.5-1.5h0C0.7,1.5,0,2.2,0,3v0C0,3.8,0.7,4.5,1.5,4.5z M5.5,9.5h10C15.8,9.5,16,9.3,16,9V7
                        c0-0.3-0.2-0.5-0.5-0.5h-10C5.2,6.5,5,6.7,5,7v2C5,9.3,5.2,9.5,5.5,9.5z M1.5,9.5L1.5,9.5C2.3,9.5,3,8.8,3,8v0
                        c0-0.8-0.7-1.5-1.5-1.5h0C0.7,6.5,0,7.2,0,8v0C0,8.8,0.7,9.5,1.5,9.5z M5.5,14.5h10c0.3,0,0.5-0.2,0.5-0.5v-2c0-0.3-0.2-0.5-0.5-0.5
                        h-10C5.2,11.5,5,11.7,5,12v2C5,14.3,5.2,14.5,5.5,14.5z M1.5,14.5L1.5,14.5C2.3,14.5,3,13.8,3,13v0c0-0.8-0.7-1.5-1.5-1.5h0
                        C0.7,11.5,0,12.2,0,13v0C0,13.8,0.7,14.5,1.5,14.5z`;
                break;
            default:
        }

        this.setState({
            width: width,
            height: height,
            path: path,
            className: className,
        });
    }

    render () {
        return (
            <svg version="1.1"
                ref={this.props.icon}
                width={this.state.width}
                height={this.state.height}
                className={this.state.className}
                viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
                    <path fill={this.props.color} d={this.state.path} />
            </svg>
        );
    }
}

SvgIcon.defaultProps = {
    icon: 'DEFAULT',
    color: '#FFFFFF',
};

SvgIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default SvgIcon;
