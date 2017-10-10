import React, { Component } from 'react';
import axios from 'axios';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios.get('http://104.236.28.32/restaurant')
      .then((response) => {
        this.setState({options: response.data.restaurants})
      })
      .catch((err) => {
        alert(err);
      })
  }


  renderItem() {
    return (
      this.state.options.map((element, index) => {
        return (
          <li key={index}>
            <div className="item-wrapper">
              <div>
                Name: {element.name}
              </div>
              <div>
                Category: {element.category}
              </div>
              <div>
                Distance: {element.distance}
              </div>
              <button className="fix-btn btn">Vote!</button>
            </div>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <div className="item-list">
        <div>
          <h1>Your decision matters.</h1>
        </div>
        {
          this.state.options.length===0
          ? <p>Loading...</p>
          : <ul>{this.renderItem()}</ul>
        }
      </div>
    )
  }
}