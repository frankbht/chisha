import React, { Component } from 'react';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  // renderCheckbox() {
  //   return (
  //     this.props.checkbox.map((element, index) => {
  //       return (
  //         <div className="checkbox-group" key={index}>
  //           <input type="checkbox" name={element.name} onChange={this.props.onCheckboxChange} checked={element.isChecked} />
  //           <label htmlFor={element.name}>{element.name}</label>
  //         </div>
  //       )
  //     })
  //   )
  // }

  render() {
    return (
      <div className="side-bar">
        <div>
          <h1>Refine</h1>
        </div>
        <div>
          <label><b>Sorted By</b>
          <select 
            value={this.props.sort}
            onChange={this.props.onSortChange}
          >
            <option value="Alphabetical">Alphabetical</option>
            <option value="Price">Price</option>
          </select>
          </label>
        </div>
        <div>
          <label><b>Distance</b>
            <select
              value={this.props.distance}
              onChange={this.props.onDistanceChange}
            >
              <option value="close">很近</option>
              <option value="soso">一般</option>
              <option value="far">很远</option>
              <option value="wtf">贼特么远</option>
            </select>
          </label>
        </div>
        <div>
          <button className='btn'>Reset</button>
        </div>    
      </div>
    )
  }
}