import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <div>
            <input type="text" name="username" placeholder="Email" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password"/>
          </div>
          <div>
            <button type="submit">Login</button>
            <button type="cancle">Cancle</button>
          </div>
        </form>
      </div>
    )
  }
}