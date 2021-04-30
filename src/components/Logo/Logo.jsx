import React from 'react';

import logo from './logo.svg';

import './Logo.scss';

const Logo = () => (
    <div className="jumping-logo" >
        <div className="jumping-logo-inner">
            <img src={logo} alt='logo' />
        </div>
    </div>
);
  
export default Logo;