import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios'
import LoadBar from '../components/load_bar';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleOnVote = this.handleOnVote.bind(this);
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

  render() {
    return (
      <div className="item-list">
        <div>
          <h1>Your decision matters.</h1>
        </div>
          <LoadBar/>
      </div>
    )
  }
}

export default withRouter(ItemList);