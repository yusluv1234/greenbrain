import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from './components/pages/home-pages/HomePages';
import SigninPages from './components/pages/sign-in-pages/SigninPages';
import SignupPages from './components/pages/sign-up-pages/SignupPages';

import './App.css';
import LectureNotePages from './components/pages/lecture-note-pages/LectureNotePages';
// import SignUp from './components/SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/lecturenotes" component={LectureNotePages} />
          <Route path="/pastquestions" component={LectureNotePages} />
          <Route path="/projectmaterial" component={LectureNotePages} />
          <Route path="/signup" component={SignupPages} />
          <Route path="/signin" component={SigninPages} />
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
