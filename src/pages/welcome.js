import React, { Component } from 'react';
import Login from '../components/login_form';
import Signup from '../components/signup_form';

export default class WelcomePage extends Component {
  constructor(props){
  	super(props);
  	this.state = { login_display: true,
                   signup_display: false};
  }
  switchPage() {
    this.setState((prevState) => {
      return {login_display: !prevState.login_display,
              signup_display: !prevState.signup_display}
    })
  }
  render(){
    if (this.state.login_display === true){
      return(
        <div>
          <Login login_display={this.state.login_display}
                 switchPage={this.switchPage.bind(this)}/>
        </div>
      )
    }
    if (this.state.signup_display === true){
      return(
        <div>
          <Signup signup_display={this.state.signup_display}
                  switchPage={this.switchPage.bind(this)}/>
        </div>
      )
    }
  }
}
