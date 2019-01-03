import React, {Component} from 'react';
import './Auth.css';

class Auth extends Component {
    state = {
        login: true,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit = () => {

    }

    loginToggle = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({
            login: !login,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    render(){
        let title = this.state.login ? "Login" : "Sign-up";
        let signupFields = this.state.login
            ? null : (
                <div>
                    <label htmlFor='firstname'>First Name:</label><br />
                    <input type='text' id='firstname' onChange={this.handleChange} value={this.state.firstName} /><br />
                    <label htmlFor='lastname'>Last Name:</label><br />
                    <input type='text' id='lastname' onChange={this.handleChange} value={this.state.lastName}/><br />
                </div>
            )

        return(
            <form className="cardLike" onSubmit={this.handleSubmit}>
                <h1>{title}</h1>
                <label htmlFor="email">Email:</label><br/>
                <input type="text" id="email" onChange={this.handleChange} value={this.state.email} /><br />
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" onChange={this.handleChange} value={this.state.password} /><br />
                {signupFields}
                <button onClick={this.loginToggle}>Login/Sign-up Toggle</button><br />
                <button type="Submit">Submit User Data</button>
            </form>
        )
    }
}

export default Auth;