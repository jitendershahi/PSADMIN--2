import React,{ Component } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>PluralSight Adminstration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        )
    }
}

export default Home;