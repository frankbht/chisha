import React, { Component } from 'react';
import SideBar from '../components/side_bar';
import ItemList from '../components/item_list';

export default class Vote extends Component {
  render() {
    return (
      <div className="vote">
        <SideBar />
        <ItemList />
      </div>
    )
  }
}