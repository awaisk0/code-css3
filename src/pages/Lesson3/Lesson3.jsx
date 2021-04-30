import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom';

import './Lesson3.scss';

function Lesson3({ onLessonButtonSubmit }) {
  return (
    <section className="page">
      <h1>Lesson 3</h1>
      <h2>Learn Transitions</h2>
      <p>This lesson will explain how transitions work in CSS3.</p>
      <br />
      <li>Using transitions on an element</li>
      <p>In a transition, you can apply a 'transition-duration' property to specify the duration of the tranisition.</p>
      <p>You can also apply a 'transition-property' to specify what property the transition will apply to.</p>
      <p>A 'transition-timing-function' is also specified for the type of transition and can be 'linear', 'ease-in', 'ease-out' or 'ease-in-out'.</p>
      <p>You can use transitions on an element with the following syntax: </p>
      <ol>
        <li>Here's an example that applies the transition-timing-function with an ease-in transition:</li>
        <code>
          transition-duration: 750ms;
          <br />
          transition-property: background-color, transform;
          <br />
          transition-timing-function: ease-in;
        </code>
        <br />
        <br />
        <p>Apply the above code to the CSS square class to see the transition properties applied to the 'background-color' and 'transform' property on hover: </p>
        <code>
          &lt;div class='square'&gt;<br />
          &lt;/div&gt;
        </code>
        <br />
        <br />
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
        <br />
        <code>
          .square:hover &#x007B;
          <br />
            &nbsp;&nbsp;background-color: lightblue;
            <br />
            &nbsp;&nbsp;transform: rotate(20deg);
            <br />
          &#125;
          <br />
        </code>

        <p>Try hovering over the blue square to see the transition applied,
           you should see an output like that shown below: </p>
        <br />
        <br />
        <div className='square-transitions'></div>
        <br />
      </ol>

      <p>Use the code editor below to have a go yourself! Good luck!</p>
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
          <Link to='/lesson4'>Go to Lesson 4</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson3;