import React, {PropTypes} from 'react';
import SvgIcon from '../ui/SvgIcon';
import Carousel from '../carousel/Carousel';
// Action
import setPlaylist from '../../actions/setPlaylist';

class ReleaseCovers extends React.Component {

    handleClick () {
        this.context.executeAction(setPlaylist, this.props.playlist);
    }

    render () {
        const style = {
            backgroundColor: this.props.bgColor,
        };
        return (
            <div
                className="release-covers"
                style={style}>
                <button
                    className="play-album-btn"
                    onClick={this.handleClick.bind(this)}>
                        <SvgIcon icon="PLAY_LARGE" />
                </button>
                <Carousel images={this.props.covers} />
            </div>
        );
    }
}

ReleaseCovers.contextTypes = {
    executeAction: PropTypes.func.isRequired,
};

ReleaseCovers.propTypes = {
    playlist: PropTypes.array.isRequired,
    covers: PropTypes.array.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default ReleaseCovers;
