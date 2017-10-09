import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './components/login_form';
import Vote from './pages/vote';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/vote' component={Vote} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
