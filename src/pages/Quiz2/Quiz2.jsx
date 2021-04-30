import React from "react";

import { Link } from 'react-router-dom';

import Quiz from '../../components/Quiz/Quiz';
import Questions2 from './Questions2';

const Quiz2 = ({ onQuizButtonSubmit }) => {
  return (
    <section className="page">
        <h1 className='heading'>QUIZ 2</h1>
        <Quiz questions={Questions2} />

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
            <Link to='/quiz3'>Go to Quiz 3</Link>
          </button>
        </div>
    </section>
  );
}

export default Quiz2;