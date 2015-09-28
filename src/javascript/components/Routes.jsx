'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import Application from './Application';
import Home from './Home';
import About from './About';
import Releases from './Releases';
import NotFound from './NotFound';

export default (
    <Router component={Application}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/releases" component={Releases} />
        <Route path="*" component={NotFound} />
    </Router>
)
