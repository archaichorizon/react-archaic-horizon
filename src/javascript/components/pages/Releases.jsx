import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Releases extends React.Component {

    render () {
        return (
            <article className="releases-page">
                <h1>Releases page.</h1>
                <ul className="releases-list">
                    {this.props.releases.map(release => {
                        return (
                            <li className="release" key={release.cat_no}>
                                <Link to={`/releases/${release.cat_no}`}>
                                    <div className="cover">
                                        <img src={release.covers[0].downloads['JPEG Thumb']} alt={release.title} />
                                    </div>
                                    <div className="details">
                                        <h2>{release.creator}</h2>
                                        <h3>{release.title}</h3>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </article>
        );
    }

}

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
