import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from '../components/nav_bar';
import axios from 'axios';

class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      category: '',
      distance: 0
    }
    this.handleNameOnChange = this.handleNameOnChange.bind(this);
    this.handleCategoryOnChange = this.handleCategoryOnChange.bind(this);
    this.handleDistanceOnChange = this.handleDistanceOnChange.bind(this);
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
  }

  handleNameOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleCategoryOnChange(event) {
    this.setState({
      category: event.target.value
    })
  }

  handleDistanceOnChange(event) {
    this.setState({
      distance: event.target.value
    })
  }

  handleFormOnSubmit(event) {
    event.preventDefault();
    axios.post('http://104.236.28.32/restaurant', {
      name: this.state.name,
      category: this.state.category,
      distance: this.state.distance
    })
    .then((response) => {
      alert("success");
      this.props.history.push("/vote");
    })
    .catch((err) => {
      alert(err);
    })
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <div className="restaurant" >
          <h4>Add your favorite Restaurant to our database!</h4>
          <form className="restaurant-form" onSubmit={this.handleFormOnSubmit}>
            <label>Restaurant Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameOnChange} placeholder="Restaurant Name"/>
            <label>Category</label>
            <input tyep="text" name="category" value={this.state.category} onChange={this.handleCategoryOnChange} placeholder="Category"/>
            <label>Distance</label>
            <input type="number" name="distance" value={this.state.distance} onChange={this.handleDistanceOnChange} step="0.1" placeholder="Distance"/>
            <button className="btn" value="submit">Create</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Restaurant);