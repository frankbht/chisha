import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props){
  	super(props);
  	this.state = {name:"",
                  username:"",
                  password:"",
                  confirmPassword:""
                };
    this.onSignUpFormSubmit = this.onSignUpFormSubmit.bind(this);
  }
  componentDidMount() {
    fetch('userInfo.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState((prevState, props) => ({
          users: response.users
        }))
      })
  }
  onSignUpFormSubmit(event) {
    event.preventDefault();
    if(this.state.password === this.state.confirmPassword){
      this.props.switchPage();
    }
    else{
      alert("Username and password does not match, please type in again")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSignUpFormSubmit} className="login-form">
          <div>
            <input
              placeholder="Name"
              value={this.state.name}
              onChange={(event)=>{this.setState({name: event.target.value})}}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Email"
              value={this.state.username}
              onChange={(event)=>{this.setState({username: event.target.value})}}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={(event)=>{this.setState({password: event.target.value})}}
              type="password"
            />
          </div>
          <div>
            <input
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={(event)=>{this.setState({confirmPassword: event.target.value})}}
              type="password"
            />
          </div>
          <div className="input-group-btn">
            <input type="submit" className="btn btn-primary" value="Signup" />
            <input type="reset" className="btn btn-secondary" value="Cancel"/>
          </div>
        </form>
      </div>
    )
  }
}
