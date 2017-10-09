import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/">Result</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    )
  }
}