import React,{ Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../container/home/Home'
import About from '../container/about/About'
import Login from '../container/login/login'

import Courses from '../container/courses/courses'
import  ManageCourse  from "../container/managecourse/managecourse"

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/courses" component={Courses} />

                    <Route path="/course" component={ManageCourse} />
                    <Route path="/course/:id" component={ManageCourse} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Routes;
