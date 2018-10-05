import React ,{ Component } from 'react'

import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div>
                <NavLink to="/home">Home</NavLink>
                {" | "}
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }
}

export default Header;