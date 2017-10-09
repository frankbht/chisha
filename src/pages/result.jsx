import React, { Component } from 'react';
import SideBar from '../components/side_bar';
import ItemList from '../components/item_list';

export default class Result extends Component {


    render() {
        return (
            <div className="result">
                <SideBar />
                <ItemList />
            </div>
        )
    }
}