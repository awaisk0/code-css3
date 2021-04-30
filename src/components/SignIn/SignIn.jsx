import React, { Component } from 'react';

import FormInput from '../../components/FormInput/FormInput';

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  
  onSubmitSignIn = () => {
    fetch("https://code-css3-api.herokuapp.com/signin", {
      method: "post",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <>
        <article className='sign-in'>
          <h2>Sign In</h2>
          <span>Sign in with your email and password</span>

          <div>
            <FormInput
              name='email'
              type='email'
              value={this.state.signInEmail}
              handleChange={this.onEmailChange}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.signInPassword}
              handleChange={this.onPasswordChange}
              label='Password'
              required
            />
            <input type='submit' onClick={this.onSubmitSignIn} value='Sign In' />
            <p onClick={() => onRouteChange('signup')} className="signup-link">Sign Up</p>
          </div>
        </article>
      </>
    );
  }
}

export default SignIn;