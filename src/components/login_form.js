import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = { username: "" ,
                   password: ""
                 };

    this.onInput1Change = this.onInput1Change.bind(this);
    this.onInput2Change = this.onInput2Change.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSignUpButtonClick = this.onSignUpButtonClick.bind(this);
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
    this.setState({ username: event.target.value });
  }

  onInput2Change(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if(this.match(this.state.username, this.state.password)){
    this.setState({ username: "",
                    password: ""
                  });
    this.props.history.push("/vote");
    }
    else{
      alert("Username Password not match")
    }
  }
  match(a,b){
    return this.state.users.findIndex((user)=> user.email === a && user.password === b) + 1
  }
  onCancelClick(event) {
    this.setState({ username: "",
                    password: ""
                  });
  }

  onSignUpButtonClick() {
    this.props.switchPage();
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <div>
            <input
              placeholder="Email"
              value={this.state.username}
              onChange={this.onInput1Change}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInput2Change}
              type="password"
            />
          </div>
          <div className="input-group-btn">
            <input type="submit" className="btn btn-primary" value="Login" />
            <input type="reset" className="btn btn-secondary" value="Cancel"/>
          </div>
        </form>

        <button onClick={this.onSignUpButtonClick}>Sign Up</button>
      </div>
    )
  }
}

export default withRouter(Login);
