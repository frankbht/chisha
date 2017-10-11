import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { Line } from 'rc-progress';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      options: []
    }
    this.handleOnVote = this.handleOnVote.bind(this);
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios.get('http://104.236.28.32/restaurant')
      .then((response) => {
        this.setState({options: response.data.restaurants})
      })
      .catch((err) => {
        alert(err);
      })
  }


  increase() {
        const percent = this.state.percent + 1;
        if (percent >= 100) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 20);
    }


    handleOnVote(restaurant) {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios.post('http://104.236.28.32/result', {
      restaurant
    })
    .then((response) => {
      this.props.history.push("/result");
    })
    .catch(err => {
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
              <button onClick={() => this.handleOnVote(element._id)} className="fix-btn btn btn-primary">Vote!</button>
            </div>
          </li>
        )
      })
    )
  }

  loadingBar(number) {
    if(number === 0){
      return(
      <div style={{ margin: 5, width: 500 }}>
        <Line percent={this.state.percent} strokeWidth="4" strokeColor="#D3D3D3" />
        <p>Loading...</p>
      </div>

        )
    }
    else{
      return(
      <ul>{this.renderItem()}</ul>
      )
    }
  }

  render() {
    return (
      <div className="item-list">
        <div>
          <h1>Your decision matters.</h1>
        </div>
          {
           this.loadingBar(this.state.options.length)
        }
      </div>
    )
  }
}

export default withRouter(ItemList);