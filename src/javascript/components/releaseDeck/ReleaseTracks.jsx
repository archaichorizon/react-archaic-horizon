import React from 'react';

export default class ReleaseTracks extends React.Component{

	constructor () {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

    handleClick (index) {
        let track = this.props.release.tracks[index];
        console.warn('Add action here to play "' + track.title + '"');
    }

    render () {
        let self = this;
		let tracks = this.props.release.tracks.map(function(track, i) {
			return (
				<li key={i}>{track.title} - <a href={track.stream}>Download</a> <button onClick={self.handleClick.bind(self, i)}>Play</button></li>
			);
		});
        
		return (
			<article className="release">
	    		<h1>{this.props.release.title}</h1>
	    		<h2>{this.props.release.creator}</h2>
	    		<ol className="release-tracks">
	    			{tracks}
	    		</ol>
    		</article>
    	);
    }
	
};

ReleaseTracks.contextTypes = {
    release: React.PropTypes.object
};