import React from "react";
import Challenge from '../../components/Challenge/Challenge';

import { Link } from 'react-router-dom'

function Lesson2({ onLessonButtonSubmit }) {
  return (
    <section className="page">
      <h1>Lesson 2</h1>
      <h2>Learn Transforms: examples</h2>
      <p>This lesson will show some more examples on how transforms work</p>
      <ol>
        <li>Skewing an element</li>
        <li>Scaling an element</li>
        <li>Translating an element</li>
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
      </code>

      <p>Using the starter HTML and CSS code provided above, the following
        output should be displayed:
      </p>
      <br />
      <div className='square-transforms' style={{transform: "rotate(0deg)"}}></div> 
      <br />
      <li>Skewing an element</li>
      <p>You can skew an element with the following syntax, specifying the degrees by which to skew the element: </p>
      <ol>
        <li>In the x-direction: </li>
        <code>
          transform: skewX(30deg);
        </code>
        <p>This produces the following output: </p>
        <div className='square-transforms' style={{transform: "skewX(30deg)"}}></div>
        <br />
        <li>In the y-direction: </li>
        <code>
          transform: skewY(30deg);
        </code>
        <p>This produces the following output: </p>
        <br />
        <div className='square-transforms' style={{transform: "skewY(30deg)"}}></div>
      </ol>

      <br />
      <li>Scaling an element</li>
      <p>You can scale an element with the following syntax, specifying the amount by which to scale the element: </p>
      <ol>
        <li>Double the size of an element: </li>
        <code>
          transform: scale(2);
        </code>
        <p>This produces the following output: </p>
        <br />
        <br />
        <div className='square-transforms' style={{transform: "scale(2)"}}></div>
        <br />
        <br />
        <li>Half the size of an element: </li>
        <code>
          transform: scale(0.5);
        </code>
        <p>This produces the following output: </p>
        <br />
        <div className='square-transforms' style={{transform: "scale(0.5)"}}></div>
      </ol>

      <br />
      <li>Translating an element</li>
      <p>You can translate an element with the following syntax, specifying the amount by which to translate an element: </p>
      <ol>
        <li>Translating an element 100% to the left and 50% up: </li>
        <code>
          transform: translate(-100%, -50%);
        </code>
        <p>This produces the following output: </p>
        <br />
        <br />
        <div className='square-transforms' style={{transform: "translate(-100%, -50%)"}}></div>
        <br />
        <li>Translating an element 40% to the right: </li>
        <code>
          transform: translate(40%);
        </code>
        <p>This produces the following output: </p>
        <br />
        <div className='square-transforms' style={{transform: "translate(40%)"}}></div>
      </ol>
      
      <br />
      <p>Use the code editor below to see if you can get the same output for the code examples above! Good luck!</p>
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
          <Link to='/lesson3'>Go to Lesson 3</Link>
        </button>
      </div>
    </section>
  );
}

export default Lesson2;