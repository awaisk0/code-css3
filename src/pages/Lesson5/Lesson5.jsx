import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom';

function Lesson5({ onLessonButtonSubmit }) {
  return (
    <section className="page">
      <h1>Lesson 5</h1>
      <h2>Learn Animations</h2>
      <p>This lesson will explain how animations work in CSS3.</p>

      <li>Using animations on an element</li>
      <p>In an animation, you can change from one style to another.</p>
      <p>The @keyframes rule followed by the 'animation-name' is used to specify the style change in the animation.</p>
      <p>For example, from one style to another or by the percentage of the animation duration at which to apply what changes.</p>

      <p>CSS styling will be applied to the following &lt;div&gt; element in these examples: <br /></p>
      <code>
        &lt;div class='square'&gt;<br />
        &lt;/div&gt;
      </code>
      <p>Here's some CSS you can add to the editor to try the example yourself to see how it works. This animation works on hover and lasts 5s. <br /></p>
      <code>
        .square &#x007B;
        <br />
          &nbsp;&nbsp;width: 100px;
          <br />
          &nbsp;&nbsp;height: 100px;
          <br />
          &nbsp;&nbsp;background-color: blue;
          <br />
          &nbsp;&nbsp;animation-name: change-background;
          <br />
          &nbsp;&nbsp;animation-duration: 5s;
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
          &nbsp;&nbsp;from &#x007B; &nbsp;background-color: blue; &#125;
          <br />
          &nbsp;&nbsp;to &#x007B; &nbsp;background-color: lightblue; &#125;
          <br />
        &#125;
        <br />
      </code>

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
          <Link to='/lesson6'>Go to Lesson 6</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson5;