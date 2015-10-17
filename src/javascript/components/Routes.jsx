'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'

// Routes
import Application from './Application';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Releases from './pages/Releases';
import Release from './pages/Release';

export default (
    <Router component={Application} >
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/releases" component={Releases} />
        <Route path="/releases/:catNo" component={Release} />
        <Route path="*" component={NotFound} />
    </Router>
)
