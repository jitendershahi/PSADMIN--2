import React ,{ Component } from 'react'

import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h2 className="navbar-brand">Admin's</h2>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link">Courses</NavLink>
                        </li>
                        <li className="btn btn-danger nav-item" style={{display:'block',float:'right',marginLeft:'780px'}}>
                            <NavLink to="login" style={{color:'white'}} className="nav-link">Login</NavLink>
                        </li> 
                        </ul>
                    </div>
                </nav>
                {/* <NavLink to="/home">Home</NavLink>
                {" | "}
                <NavLink to="/about">About</NavLink>
                {" | "}
                <NavLink to="/login">Login</NavLink> */}
            </div>
        )
    }
}

export default Header;