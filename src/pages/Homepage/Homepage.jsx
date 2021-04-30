import React from 'react';

import { ReactComponent as LaptopIllustration } from '../../assets/javascript_illustration.svg';

import './Homepage.scss';

const HomePage = () => (
    <section className='homepage-container'>
        <h1 className='title'>Learn CSS3</h1>
        <p className='desc'>Lessons, Quizzes, and Practice</p>
        <p className='content'>CSS3 Transforms, Transitions, Animations, and more...</p>
        <div className='illustration-container'>
            <LaptopIllustration />
        </div>
    </section>
);

export default HomePage;