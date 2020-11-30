import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from './components/pages/home-pages/HomePages';

import './App.css';




function App() {
  return (
    <div className='app'>
      <Router>
      <Switch>
      <Route exact path="/" component={HomePages} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
