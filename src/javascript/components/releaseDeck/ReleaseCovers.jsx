import React from 'react';
import SvgIcon from '../ui/SvgIcon'; 

class ReleaseCovers extends React.Component{

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
                    onClick={this.props.onPauseBtnClick}>
                        <SvgIcon icon="PLAY_LARGE" />
                </button>
                <img src={this.props.covers[0].downloads.JPEG} />
            </div>
        );
    }
};

ReleaseCovers.contextTypes = {
    covers: React.PropTypes.array,
    bgColor: React.PropTypes.string,
};

export default ReleaseCovers;