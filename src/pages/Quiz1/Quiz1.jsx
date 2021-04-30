import React from "react";

import { Link } from 'react-router-dom';

import Quiz from '../../components/Quiz/Quiz';
import Questions1 from './Questions1';

const Quiz1 = ({ onQuizButtonSubmit }) => {
  return (
    <section className="page">
        <h1 className='heading'>QUIZ 1</h1>
        <Quiz questions={Questions1} />

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
            <Link to='/quiz2'>Go to Quiz 2</Link>
          </button>
        </div>
    </section>
  );
}

export default Quiz1;