import React, { Component } from 'react';
import VoteItemList from '../components/voteditem_list';
import NavBar from "../components/nav_bar";

export default class Result extends Component {


    render() {
        return (
            <div>
                <NavBar />
            <div className="result">
                <VoteItemList />
            </div>
            </div>
        )
    }
}