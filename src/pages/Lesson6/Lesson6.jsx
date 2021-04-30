import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom';

import './Lesson6.scss';

function Lesson6({ onLessonButtonSubmit }) {
  return (
    <section className="page">
      <h1>Lesson 6</h1>
      <h2>Learn Animations: examples</h2>
      <p>This lesson will show some more examples of animations in CSS3.</p>

      <p>CSS styling will be applied to the following &lt;div&gt; element in this example: <br /></p>
      <code>
        &lt;div class='square'&gt;<br />
        &lt;/div&gt;
      </code>
      <p>Here's some CSS you can add to the editor to try the example yourself to see how it works. This animation works on hover and lasts 5s using percentages in the @keyframe rule. <br /></p>
      <code>
        .square &#x007B;
        <br />
          &nbsp;&nbsp;width: 100px;
          <br />
          &nbsp;&nbsp;height: 100px;
          <br />
          &nbsp;&nbsp;background-color: blue;
        <br />
        &#125;
        <br />
      </code>

      <br />

      <code>
        .square:hover &#x007B;
          <br />
          &nbsp;&nbsp;animation-name: change-background;
          <br />
          &nbsp;&nbsp;animation-duration: 5s;
        <br />
        &#125;
        <br />
        <br />
      </code>
      
      <code>
        @keyframes change-background &#x007B;
        <br />
          &nbsp;&nbsp;0% &#x007B; &nbsp;background-color: blue; &#125;
          <br />
          &nbsp;&nbsp;50% &#x007B; &nbsp;background-color: orange; &#125;
          <br />
          &nbsp;&nbsp;100% &#x007B; &nbsp;background-color: lightblue; &#125;
          <br />
        &#125;
        <br />
      </code>

      <br />
      <p>Try hovering over the blue square to see the animation applied,
         you should see an output like that shown below when you hover over the element: 
      </p>
        <br />
        <br />
        <div className='square-animated-6'></div>
        <br />
      <br />

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
          <Link to='/learn'>Go back to lessons</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson6;