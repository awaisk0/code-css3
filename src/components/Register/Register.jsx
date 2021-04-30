import React from 'react';

import FormInput from '../FormInput/FormInput';

import './Register.scss';

class Register extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = {
      email: '',
      password: '',
      name: ''
    }

  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignUp = () => {
    fetch('https://code-css3-api.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className='sign-up'>
        <h2 className='title'>Sign Up</h2>
        <span>Sign up with your email and password</span>
        <section className='sign-up-form'>
          <FormInput
            type='text'
            name='name'
            value={this.state.name}
            handleChange={this.onNameChange}
            label='Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.onEmailChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.onPasswordChange}
            label='Password'
            required
          />
          <input type='submit' value='Sign Up' onClick={this.onSubmitSignUp} />
        </section>
      </article>
    );
  }
}

export default Register;