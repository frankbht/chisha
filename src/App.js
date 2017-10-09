import React, { Component } from 'react';
<<<<<<< HEAD
import WelcomePage from './page/welcome';
=======
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './components/login_form';
import Vote from './pages/vote';
>>>>>>> router_config

export default class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <WelcomePage />
=======
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/vote' component={Vote} />
          </Switch>
        </Router>
>>>>>>> router_config
      </div>
    );
  }
}
