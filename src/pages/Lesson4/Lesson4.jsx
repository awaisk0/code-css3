import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom';

import './Lesson4.scss';

function Lesson4({ onLessonButtonSubmit }) {
  return (
    <section className="page">
      <h1>Lesson 4</h1>
      <h2>Learn Transitions: examples</h2>
      <p>This lesson will give some more examples of how transitions work.</p>
      <ol>
        <li>Using the 'transition-delay' property</li>
        <li>linear</li>
        <li>ease-out</li>
        <li>ease-in-out</li>
      </ol>
      <p>CSS styling will be applied to the following &lt;div&gt; element in these examples: <br /></p>
      <code>
        &lt;div class='square'&gt;<br />
        &lt;/div&gt;
      </code>
      <p>Here's some CSS you can add to the editor to try the examples yourself to see how they work: <br /></p>
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
        <br />
      </code>
      
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

      <br />
      

      <li>Adding a 'transition-delay' and a 'linear transition' to the square class: </li>
      <br />
      <code>
          transition-duration: 750ms;
          <br />
          transition-property: background-color, transform;
          <br />
          transition-timing-function: linear;
          <br />
          transition-delay: 1.5s;
      </code>

      <br />
      <p>Try hovering over the blue square to see the transition applied,
          you should see an output like that shown below (note that a 1.5s delay was applied): </p>
        <br />
        <br />
        <div className='square-transitions2'></div>
        <br />

      <li>ease-out</li>
      <br />
      <div className='square-transitions3'></div>

      <br />

      <li>ease-in-out without a transition delay</li>
      <br />
      <div className='square-transitions4'></div>

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
          <Link to='/lesson5'>Go to Lesson 5</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson4;