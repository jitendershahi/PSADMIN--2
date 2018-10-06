import React, { Component } from 'react'

import './login.css'

class Login extends Component {
    state = {
        loginForm:{
            email:'',
            password:''
        }
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6 col-md-offset-2" style={{marginLeft:'340px',marginTop:'100px'}}>
                        <h3>Login Form</h3>
                        <form>
                        <label style={{padding:'20px'}} htmlFor="email">Email</label>
                        <input type="email"
                        className="form-control input" 
                        placeholder="please enter email id"
                        value={this.state.loginForm.email}  />

                        <label  style={{padding:'20px'}} htmlFor="password">Password</label>
                        <input type="password"
                        className="form-control input"
                        placeholder="please enter password"
                        value={this.state.loginForm.password}/>

                        <input value="Login" className="btn btn-danger custom-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
