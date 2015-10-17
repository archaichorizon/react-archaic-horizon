'use strict';

import React from 'react';
import { Link } from 'react-router'

class Releases extends React.Component {

    render () {
        return (
            <article>
                <h1>Releases page.</h1>
                <ul>
                    {this.props.releases.map(release => {
                        return (
                            <li key={release.cat_no}>
                                <Link to={`/releases/${release.cat_no}`}>{release.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </article>
        );
    }

};

export default Releases;