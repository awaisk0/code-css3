import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './Header.scss';

const Header = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <section className='header'>
          <NavLink className='logo-container' to='/' exact>
            <Logo className='logo' />
          </NavLink>
          <div className='options'>
            <NavLink className='option' activeClassName='active-link' to='/' exact>
              Home
            </NavLink>
            <NavLink className='option' activeClassName='active-link' to='/learn'>
              Learn
            </NavLink>
            <NavLink className='option' activeClassName='active-link' to='/quiz'>
              Quiz
            </NavLink>
            <p onClick={() => onRouteChange('signout')} className='option'>Sign Out</p>
          </div>
        </section>
      </nav>
    );
  } 
  else {
    return (
      <nav className='nav-signin-signup'>
        <p onClick={() => onRouteChange('signin')} className='signin-signup-link'>Sign In</p>
        <p onClick={() => onRouteChange('signup')} className='signin-signup-link'>Sign Up</p>
      </nav>
    );
  }
}

export default Header;