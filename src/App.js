import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from './components/pages/home-pages/HomePages';

import './App.css';
import LectureNotePages from './components/pages/lecture-note-pages/LectureNotePages';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/lecturenotes" component={LectureNotePages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
