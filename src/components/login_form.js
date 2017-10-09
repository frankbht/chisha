import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = { username: "" ,
                   password: ""
                 };

    this.onInput1Change = this.onInput1Change.bind(this);
    this.onInput2Change = this.onInput2Change.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  onInput1Change(event) {
    this.setState({ username: event.target.value });
  }

  onInput2Change(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password)

    this.setState({ username: "",
                    password: ""
                  });
  }

  onCancelClick(event) {
    this.setState({ username: "",
                    password: ""
                  });
  }

  render() {
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
      </div>
    )
  }
}
