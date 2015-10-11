'use strict';

import React from 'react';

class Release extends React.Component {

    render () {
        return (
            <article>
                <h1>{this.props.routeParams.catNo}</h1>
            </article>
        );
    }

};

export default Release;