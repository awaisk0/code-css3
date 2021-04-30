import React from "react";

import { Link } from 'react-router-dom';

import Quiz from '../../components/Quiz/Quiz';
import Questions3 from './Questions3';

const Quiz3 = ({ onQuizButtonSubmit }) => {
  return (
    <section className="page">
        <h1 className='heading'>QUIZ 3</h1>
        <Quiz questions={Questions3} />

        <div style={{background: "#cde9ed", width: "100%", padding: "20px", borderRadius: "10px"}}>
          <button 
            className='btn-submit-challenge'
            onClick={onQuizButtonSubmit}
            type='submit'
          >Submit</button>
        
          <button 
            className='btn-next' 
            type='submit'
          >
            <Link to='/quiz'>Go back to quizzes</Link>
          </button>
        </div>
    </section>
  );
}

export default Quiz3;