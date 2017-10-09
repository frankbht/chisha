import React, { Component } from 'react';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    fetch('data.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState((prevState, props) => ({
          options: response.options
        }))
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
                Distance: {element.Distance}
              </div>
            </div>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <div className="item-list">
        <h4>Your decision matters.</h4>
        {
          this.state.options.length===0
          ? <p>Loading...</p>
          : <ul>{this.renderItem()}</ul>
        }
      </div>
    )
  }
}