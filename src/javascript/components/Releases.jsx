'use strict';

import React from 'react';

class Releases extends React.Component {

    render () {
        return (
            <article>
                <h1>Releases page.</h1>
                <ul>
                {this.props.releases.map(release => {
                    return <li key={release.cat_no}>{release.title}</li>;
                })}
                </ul>
            </article>
        );
    }

};

export default Releases;