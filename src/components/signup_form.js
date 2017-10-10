import React, { Component } from 'react';
import axios from 'axios';

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
<<<<<<< HEAD
    if(this.state.password === this.state.confirmPassword){
      this.props.switchPage();
    }
    else{
      alert("Username and password does not match, please type in again")
=======
    if(this.state.password !== this.state.confirmPassword) {
      alert("password not match");
>>>>>>> 505c69d5e0aedb9e6a3c4e7b5f8cb7bf896b19d3
    }
    axios.post('http://104.236.28.32/signup', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      this.props.switchPage();
    })
    .catch((err) => {
      alert(err);
    })
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
