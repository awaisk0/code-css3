import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Progress from '../components/Progress/Progress';
import Sidebar from '../components/Sidebar/Sidebar';

// Pages
import HomePage from '../pages/Homepage/Homepage';
import Learn from '../pages/Learn/Learn';
import QuizPage from '../pages/QuizPage/QuizPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// Lessons
import Lesson1 from '../pages/Lesson1/Lesson1';
import Lesson2 from '../pages/Lesson2/Lesson2';
import Lesson3 from '../pages/Lesson3/Lesson3';
import Lesson4 from '../pages/Lesson4/Lesson4';
import Lesson5 from '../pages/Lesson5/Lesson5';
import Lesson6 from '../pages/Lesson6/Lesson6';

// Quizzes
import Quiz1 from '../pages/Quiz1/Quiz1';
import Quiz2 from '../pages/Quiz2/Quiz2';
import Quiz3 from '../pages/Quiz3/Quiz3';

import Particles from 'react-particles-js';
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button';

import './App.css';

const particles = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }
  }
}

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    lessonSubmissions: 0,
    quizSubmissions: 0,
    joined: ''
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        lessonSubmissions: data.lessonsubmissions,
        quizSubmissions: data.quizsubmissions,
        joined: data.joined
      }
    });
  }

  onLessonButtonSubmit = () => {
    fetch('https://code-css3-api.herokuapp.com/lesson', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {lessonSubmissions: count}));
      alert('Success! You have made a submission and your lesson submission count has increased by one.');
    })
    .catch(console.log);
  }

  onQuizButtonSubmit = () => {
    fetch('https://code-css3-api.herokuapp.com/quiz', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {quizSubmissions: count}));
      alert('Success! You have made a submission and your quiz attempt count has increased by one.');
    })
    .catch(console.log);
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <React.Fragment>
        <Particles className='particles'
          params={particles}
        />
        <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <>
              <Sidebar />
              <Switch>
                <Route exact path='/'>
                  <Progress 
                    name={this.state.user.name} 
                    lessonSubmissions={this.state.user.lessonSubmissions}
                    quizSubmissions={this.state.user.quizSubmissions}
                  />
                  <HomePage />
                </Route>
                <Route path='/learn'>
                  <h1 className='heading'>LEARN CSS3</h1>
                  <Learn />
                  <ScrollUpButton />
                </Route>
                <Route path='/quiz'>
                  <h1 className='heading'>QUIZZES</h1>
                  <QuizPage />
                  <ScrollUpButton />
                </Route>
                <Route path='/quiz1'>
                  <Quiz1 
                    onQuizButtonSubmit={this.onQuizButtonSubmit}
                  />
                </Route>
                <Route path='/quiz2'>
                  <Quiz2 
                    onQuizButtonSubmit={this.onQuizButtonSubmit}
                  />
                </Route>
                <Route path='/quiz3'>
                  <Quiz3 
                    onQuizButtonSubmit={this.onQuizButtonSubmit}
                  />
                </Route>
                
                <Route path='/lesson1'>
                  <Lesson1
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>
                <Route path='/lesson2'>
                  <Lesson2
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>
                <Route path='/lesson3'>
                  <Lesson3
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>
                <Route path='/lesson4'>
                  <Lesson4
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>
                <Route path='/lesson5'>
                  <Lesson5
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>
                <Route path='/lesson6'>
                  <Lesson6
                    onLessonButtonSubmit={this.onLessonButtonSubmit}
                  />
                  <ScrollUpButton />
                </Route>

                <Route path="*" component={NotFoundPage} />
              </Switch>
            </>
          : (
            route === 'signin'
             ? <>
                <Logo />
                <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
               </>
             : <>
                <Logo />
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
               </>
          )
        }
      </React.Fragment>
    );
  }
}

export default App;