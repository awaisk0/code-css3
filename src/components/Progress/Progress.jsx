import React from 'react';

import './Progress.scss';

const Progress = ({ name, lessonSubmissions, quizSubmissions }) => (
    <section className='main-message'>
        { `Hello, ${name}! Explore the lessons and quizzes to improve your CSS3 skills. ` }
        <br />
        { `Your current lesson submission count is ${lessonSubmissions} and quiz attempt count is ${quizSubmissions}.` }
    </section>
);

export default Progress;