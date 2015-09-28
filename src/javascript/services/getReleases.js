'use strict';

var request = require('superagent');

module.exports = {
	releases: function () {
		request
			.get('http://api.archaichorizon.com/releases.json')
			// Calling the end function will send the request
			.end(function(err, res) {
				console.log(res);
			});
	}
}