import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './containers/Home'; // Updated import path
import About from './components/About';
import Car from './containers/Car'; // Updated import path
import Dashboard from './containers/Dashboard'; // Updated import path

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;