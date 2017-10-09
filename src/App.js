import React, { Component } from 'react';
import WelcomePage from './pages/welcome';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Vote from './pages/vote';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/vote' component={Vote} />
          </Switch>
        </Router>
      </div>
    );
  }
}
