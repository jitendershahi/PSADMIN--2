import React,{ Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../container/home/Home'
import About from '../container/about/About'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Routes;
