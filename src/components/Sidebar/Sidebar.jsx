import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    }
  }

  showSidebar = () => {
    this.setState({isActive: !this.state.isActive})
  }

  render() {

    const { isActive } = this.state;

    return (
      // Adds the active class if the sidebar is clicked
      <nav className={isActive ? 'sidebar active' : 'sidebar'}>
        <button className='hamburger' type='button' onClick={this.showSidebar}>
          <div></div>
        </button>
        {/* Close sidebar when a lesson is clicked on */}
        <ul onClick={this.showSidebar}>

          {/* Lessons */}
          <li><Link to="/lesson1">Lesson 1: CSS3 Transforms</Link></li>
          <li><Link to="/lesson2">Lesson 2: CSS3 Transforms example</Link></li>
          <li><Link to="/lesson3">Lesson 3: CSS3 Transitions</Link></li>
          <li><Link to="/lesson4">Lesson 4: CSS3 Transitions example</Link></li>
          <li><Link to="/lesson5">Lesson 5: CSS3 Animations</Link></li>
          <li><Link to="/lesson6">Lesson 6: CSS3 Animations example</Link></li>
          
          <br />

          {/* Quizzes */}
          <li><Link to="/quiz1">Quiz 1: CSS3 Transforms Quiz</Link></li>
          <li><Link to="/quiz2">Quiz 2: CSS3 Transitions Quiz</Link></li>
          <li><Link to="/quiz3">Quiz 3: CSS3 Animations Quiz</Link></li>
        
        </ul>
      </nav>
    );
  }
}

export default Sidebar;