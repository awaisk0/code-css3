import React from 'react';

import { Link } from 'react-router-dom';

import Astronaut from '../../assets/Astronaut-big.png';

import './NotFoundPage.scss';

const NotFoundPage = () => (
    <section className='not-found-page-container'>
        <div className='astronaut-container'>
            <img className='astronaut-illustration' src={Astronaut} alt='astronaut' />
        </div>
        <p className='not-found-page-main-text'><strong>Page Not Found</strong></p>
        <p className='not-found-page-link-text'>
            <Link to="/">Go to Home</Link>
        </p>
    </section>
);

export default NotFoundPage;