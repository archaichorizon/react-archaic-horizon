'use strict';

import React from 'react';

// Components
import ReleaseDeck from '../releaseDeck/ReleaseDeck';

// Action
import getRelease from '../../actions/getRelease';

class Release extends React.Component {

    componentWillMount () {
        const catNo = this.props.routeParams.catNo;
        this.fetchRelease(catNo);
    }

    componentWillReceiveProps (nextProps) {
        const catNo = nextProps.routeParams.catNo;
        if (nextProps.routeParams.catNo !== this.props.routeParams.catNo) {
            this.fetchRelease(catNo);
        }
    }

    fetchRelease (catNo) {
        this.context.executeAction(getRelease, catNo);
    }

    render () {
        return <ReleaseDeck {...this.props} />
    }

};

Release.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Release;