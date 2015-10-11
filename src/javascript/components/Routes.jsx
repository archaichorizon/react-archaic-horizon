'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'

// Routes
import Application from './Application';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import Releases from './Releases';
import Release from './Release';

export default (
    <Router component={Application} >
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/releases" component={Releases} />
        <Route path="/releases/:catNo" component={Release} />
        <Route path="*" component={NotFound} />
    </Router>
)
