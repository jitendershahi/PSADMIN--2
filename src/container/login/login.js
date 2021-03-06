import React, { Component } from 'react'

import './login.css'

import Input from '../../components/Input/input'

class Login extends Component {
    state = {
        loginForm:{
            email:'',
            password:''
        },
        error:{}
    }

    loginForm = (event) => {
        let field = event.target.name
        let value = event.target.value

        let form = { ...this.state.loginForm }
        form[field] = value

        this.setState({
            loginForm:form
        })
    }

    validateForm = () => {
        let isValid = true
        let pattern = "jitendersharmasdec@gmail.com"

        let errorForm = { ...this.state.error}

        if(this.state.loginForm.email !== pattern){
            isValid = false
            errorForm.email = "Please enter correct email id"
        }

        if(this.state.loginForm.password.length < 6){
            isValid = false
            errorForm.password = "Please enter atleast 6 character"
        }

        this.setState({ error:errorForm})
        return isValid;
    }

    submitForm = (event) => {
        event.preventDefault()
        if(!this.validateForm()) {
            return 
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6 col-md-offset-2" style={{marginLeft:'340px',marginTop:'100px'}}>
                        <h3>Login Form</h3>
                        <form onSubmit={this.submitForm}>
                        <Input labelFor="email"
                         label="Email" 
                         type="email"
                          name="email" 
                          placeholder="please enter email id"
                          value={ this.state.loginForm.email } 
                          click={this.loginForm}
                          error={this.state.error.email}/>

                        <Input labelFor="password"
                         label="Password" 
                         type="password"
                          name="password" 
                          placeholder="please enter password"
                          value={ this.state.loginForm.password } 
                          click={this.loginForm}
                          error={this.state.error.password}/>

                        <input type="submit" value="Login" className="btn btn-danger custom-button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
