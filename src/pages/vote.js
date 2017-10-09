import React, { Component } from 'react';
import SideBar from '../components/side_bar';
import ItemList from '../components/item_list';
import NavBar from '../components/nav_bar';

export default class Vote extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="vote">
          <SideBar />
          <ItemList />
        </div>
      </div>
    )
  }
}