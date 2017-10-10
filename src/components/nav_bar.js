import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="nav-bar">
        <ul className="navigation">
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/result">Result</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li><a onClick={this.onLogout}>Logout</a></li>
        </ul>
      </div>
    )
  }
}

export default withRouter(NavBar);