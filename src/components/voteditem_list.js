import React, { Component } from 'react';

export default class VoteItemList extends Component {
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
        this.state.options.sort(function(a,b){
            return b.vote - a.vote;
        })
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
                            <div>
                                Vote: {element.vote}
                            </div>
                            <div>
                                Voted User: {element.votedUser.map(function(user){
                                    return user + ", "
                            }).concat(" and waiting for your vote!")}
                            </div>
                            <p className="colorfuldisplay word">{element.vote}</p>
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