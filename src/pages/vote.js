import React, { Component } from 'react';
import SideBar from '../components/side_bar';
import ItemList from '../components/item_list';
import NavBar from '../components/nav_bar';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      sort: "Alphabetical",
      distance: "close",
    }
    this.onSortChange = this.onSortChange.bind(this);
    this.onDistanceChange = this.onDistanceChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onSortChange(event) {
    const newSort = event.target[event.target.selectedIndex].value;
    this.setState((prevState, props) => ({
      sort: newSort
    }))
  }

  onDistanceChange(event) {
    const newDistance = event.target[event.target.selectedIndex].value;
    this.setState((prevState, props) => ({
      distance: newDistance
    }))
  }

  onCheckboxChange(event) {
    console.log('here')
    const value = event.target.value;
    this.setState((prevState, props) => {
      const newCheckbox = prevState.checkbox;
      const index = newCheckbox.indexOf(value);
      newCheckbox[index] = !newCheckbox[index];
      console.log(newCheckbox);
      return { checkbox: newCheckbox }
    }) 
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="vote">
          <SideBar
            {...this.state} 
            onSortChange={this.onSortChange}
            onDistanceChange={this.onDistanceChange}
            onCheckboxChange={this.onCheckboxChange}
          />
          <ItemList
            {...this.state}
          />
        </div>
      </div>
    )
  }
}