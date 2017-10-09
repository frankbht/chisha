import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props){
  	super(props);
  	this.state = {name:"",
                  username:"",
                  password:"",
                  confirmPassword:""
                };
    this.onInput1Change = this.onInput1Change.bind(this);
    this.onInput2Change = this.onInput2Change.bind(this);
    this.onInput3Change = this.onInput3Change.bind(this);
    this.onInput4Change = this.onInput4Change.bind(this);
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

  onInput1Change(event) {
    this.setState({ name: event.target.value });
  }

  onInput2Change(event) {
    this.setState({ username: event.target.value });
  }
  onInput3Change(event) {
    this.setState({ password: event.target.value });
  }
  onInput4Change(event) {
    this.setState({ confirmPassword: event.target.value });
  }
  onSignUpFormSubmit(event) {
    event.preventDefault();
    if(this.state.password === this.state.confirmPassword){
      this.props.switchPage();
    }
    else{
      alert("password not match")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSignUpFormSubmit} className="input-group">
          <div>
            <input
              placeholder="Name"
              value={this.state.name}
              onChange={this.onInput1Change}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Email"
              value={this.state.username}
              onChange={this.onInput2Change}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInput3Change}
              type="password"
            />
          </div>
          <div>
            <input
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.onInput4Change}
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
