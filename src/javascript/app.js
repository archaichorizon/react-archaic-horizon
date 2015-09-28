'use strict';

import Fluxible from 'fluxible';
import {PropTypes} from 'react';
import Routes from './components/Routes.jsx';
import fetchrPlugin from 'fluxible-plugin-fetchr';

let assetUrl = require('./libs/assetUrl');

let app = new Fluxible({
    component: Routes
});

// https://github.com/yahoo/fluxible-plugin-fetchr
app.plug(fetchrPlugin({
	corsPath: 'http://api.archaichorizon.com'
}));

app.plug(assetUrl);

app.customContexts = {
    assetUrl: PropTypes.func.isRequired,
    siteUrl: PropTypes.func.isRequired,
};

app.registerStore(require('./stores/ReleasesStore'));
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/TimeStore'));

export default app;
