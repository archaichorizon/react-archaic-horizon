import React from 'react';
import _ from 'lodash';

class Carousel extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            activeSlideIdx: 0,
            mouseSide: 0 // which side of the image the mouse is on -
        };
    }

    navigateToSlide (idx) {
        var newIdx = modulo(idx, this.props.images.length);

        this.setState({
            activeSlideIdx: newIdx,
        });
    }


    _handleMouseLeave () {
        this.updateSide();
    }

    updateSide (mousePosition) {
        var side;

        if(!mousePosition){
            side = 0;
        } else {
            var el = React.findDOMNode(this.refs.carousel);
            var imageOffset = offset(el);
            var width = el.offsetWidth;

            side = RIGHT_SIDE;

            if(mousePosition.x - imageOffset.left < width/2){
                side = LEFT_SIDE;
            }
        }

        if(side !== this.state.mouseSide){
            this.setState({
                mouseSide: side
            });
        }
    }

    _handleMouseMove (ev) {
        var mousePosition = {
            x: ev.clientX,
            y: ev.clientY
        };

        this.updateSide(mousePosition);
    }

    _handleTouchStart (ev) {
        var mousePosition = {
            x: ev.touches[0].clientX,
            y: ev.touches[0].clientY,
        };

        this.updateSide(mousePosition);
    }

    _handleClick (idx) {
        this.setState({
            activeSlideIdx: idx
        });
    }

    render () {
        return (
            <div>
                <img src={this.props.images[this.state.activeSlideIdx].downloads.JPEG} />
                {this.renderDots()}
            </div>
        );
    }

    renderDots () {
        if (this.props.images.length < 2) { return };
        return (
            <ul className="dots">
                {this.props.images.map((image, idx) => {
                    let className = 'dot';
                    let style = { backgroundColor: 'white' };
                    if (idx === this.state.activeSlideIdx) {
                        className += ' active';
                        style.backgroundColor = 'black';
                    }
                    return (
                        <li key={idx}
                            style={style}
                            className={className}
                            onClick={this._handleClick.bind(this, idx)}
                        />
                    );
                })}
            </ul>
        );
    }
};



export default Carousel;

propTypes: {
        images: React.PropTypes.array.isRequired
    }
