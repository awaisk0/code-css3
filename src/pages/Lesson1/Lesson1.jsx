import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom'

import './Lesson1.scss';

const Lesson1 = ({ onLessonButtonSubmit }) => {
  return (
    <section className="page">
      <h1>Lesson 1</h1>
      <h2>Learn Transforms</h2>
      <p>This lesson will explain how transforms work. 
        With transforms you can rotate, skew, and scale elements.</p> 
      <p>The syntax to rotate an element is as follows: <br />
        <code>transform: rotate(20deg);</code></p>
      <p>This will rotate an element 20 degrees.</p>
      <p>Here's some HTML you can add to the editor to have a go yourself: <br /></p>
      <code>
        &lt;div class='square'&gt;<br />
        &lt;/div&gt;
      </code>
      <p>Here's some CSS you can add to the editor to have a go yourself: <br /></p>
      <code>
        .square &#x007B;
        <br />
          &nbsp;&nbsp;width: 100px;
          <br />
          &nbsp;&nbsp;height: 100px;
          <br />
          &nbsp;&nbsp;background-color: blue;
        <br />
        <br />
        &nbsp;&nbsp;&#47;&#42; enter the CSS below this line &#42;&#47;<br />
        <br />
        &#125;
        <br />
      </code>
      <p>Use the code editor below to rotate the square by 70 degrees! Good luck!</p>
      <p>Your output should look something like this: </p>
      <br />
      <br />
      <div className='square-transforms' style={{transform: "rotate(70deg)"}}>
      </div>
      <br />
      <br />      
      <Challenge />
      <div style={{background: "#cde9ed", width: "100%", padding: "20px", borderRadius: "10px"}}>
        <button 
          className='btn-submit-challenge'
          onClick={onLessonButtonSubmit}
          type='submit'
        >Submit</button>
      
        <button 
          className='btn-next' 
          type='submit'
        >
          <Link to='/lesson2'>Go to Lesson 2</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson1;