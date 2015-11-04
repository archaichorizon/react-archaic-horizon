import React, {PropTypes} from 'react';

// Components
import ReleaseCovers from './ReleaseCovers';
import ReleaseDetails from './ReleaseDetails';
import ReleaseDeckNav from './ReleaseDeckNav';
import Loader from '../ui/Loader';

// Action
import setPlaylist from '../../actions/setPlaylist';

export default class ReleaseDeck extends React.Component {

    componentWillReceiveProps (nextProps) {
        // Set a playlist if nothing has been set, e.g. first load.
        if (!nextProps.playlist && nextProps.isFetching && typeof nextProps.release !== 'undefined') {
            this.context.executeAction(setPlaylist, nextProps.release.tracks);
        }
    }

    renderLoading () {
        return (
            <Loader/>
        );
    }

    renderRelease () {
        let moody = this.props.release.palettes.moody;

        let style = {
            backgroundColor: moody.primary[2],
            background: `linear-gradient(${moody.accent[0]}, ${moody.primary[0]})`,
            color: moody.secondary[0]
        };

        return (
            <div id="release-deck" style={style}>
                <ReleaseDeckNav
                    current={this.props.release.cat_no}
                    next={this.props.nav.next}
                    prev={this.props.nav.prev}
                    mood={this.props.release.palettes.moody}/>
                <div className="deck-left">
                    <ReleaseCovers
                        playlist={this.props.release.tracks}
                        covers={this.props.release.covers}
                        bgColor={moody.secondary[0]}/>
                </div>
                <div className="deck-right">
                    <ReleaseDetails release={this.props.release}/>
                </div>
            </div>
        );
    }

    render () {
        return typeof this.props.release !== 'undefined' && !this.props.isFetching ? this.renderRelease() : this.renderLoading();
    }
}

ReleaseDeck.contextTypes = {
    executeAction: PropTypes.func.isRequired
};

ReleaseDeck.propTypes = {
    release: PropTypes.object,
    nav: PropTypes.object.isRequired,
    mood: PropTypes.object,
    playlist: PropTypes.array,
    covers: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
};

// import ReleaseMood from './ReleaseMood.jsx';
// <ReleaseMood mood={this.props.release.palettes.moody} />
