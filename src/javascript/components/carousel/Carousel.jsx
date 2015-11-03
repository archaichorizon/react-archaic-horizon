import React, {PropTypes} from 'react';
import _ from 'lodash';

class Carousel extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            activeSlideIdx: 0
        };
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
        if (this.props.images.length < 2) {
            return;
        };
        return (
            <ul className="dots">
                {this.props.images.map((image, idx) => {
                    let className = 'dot';
                    let style = { backgroundColor: 'white' };
                    if (idx === this.state.activeSlideIdx) {
                        className += ' is-selected';
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
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default Carousel;
