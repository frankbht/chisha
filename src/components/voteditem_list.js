import React, { Component } from 'react';
import axios from 'axios';
import LoadBar from './load_bar';

export default class VoteItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
            options: []
        }
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase()
        axios.get('http://104.236.28.32/result')
            .then((response) => {
                this.setState((prevState, props) => ({
                    options: response.data.results
                }))
            })

    }
    increase(){
        let percent = this.state.percent + 1;
        if (percent >= 100) {
            clearTimeout(this.tm);
            this.setState({percent:0});
            percent = 0;
            this.increase();
            if(this.state.options.length > 0){
                return;
            }
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 20);
    }

    restart(){
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }

    loadingBar(number) {
        if(number === 0){
            return(
                <LoadBar/>
            )
        }
        else{
            return(
                <ul>{this.renderItem()}</ul>
            )
        }
    }


    renderItem() {
        this.state.options.sort(function(a,b){
            return b.votedBy.length - a.votedBy.length;
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
                                Distance: {element.distance}
                            </div>
                            <div>
                                Vote: {element.votedBy.length}
                            </div>
                            <div>
                                Voted User: {element.votedBy.map(function(user){
                                    return user + ", "
                            }).concat(" and waiting for your vote!")}
                            </div>
                            <p className="colorfuldisplay word">{element.votedBy.length}</p>
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
                   this.loadingBar(this.state.options.length)
                }
            </div>
        )
    }
}