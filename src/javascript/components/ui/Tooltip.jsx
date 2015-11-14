import React, {PropTypes} from 'react';

class Tooltip extends React.Component {
    constructor () {
        super();
        this.state = {
            isVisible: false,
        };
        this.timer = null;
    }

    componentWillUnmount () {
        clearTimeout(this.timer);
    }

    handleMouseEnter () {
        this.timer = setTimeout(() => {
            this.setState({
                isVisible: true
            });
        }, this.props.delayTime);
    }

    handleMouseLeave () {
        clearTimeout(this.timer);
        this.setState({
            isVisible: false
        });
    }

    render () {
        const isVisible = this.state.isVisible ? ' is-visible' : ' is-hidden';
        const className = `tooltip ${isVisible}`;

        return (
            <div 
                className={className}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}>
                    <span className="tooltip-label">{this.props.label}</span>
                    {this.props.children}
            </div>
        );
    }
}

Tooltip.defaultProps = {
    delayTime: 1500
};

Tooltip.propTypes = {
    children: React.PropTypes.node,
    delayTime: React.PropTypes.number,
    label: React.PropTypes.string.isRequired
};

export default Tooltip;

