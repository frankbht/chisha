import React, { Component } from 'react';

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <h4>Refine</h4>
        <div>
          <label><b>Sorted By</b>
            <select>
              <option>Distance</option>
              <option>Alphabetical</option>
              <option>Rating</option>
              <option>Delevery Min</option>
              <option>Delevery Fee</option>
            </select>
          </label>
        </div>
        <div>
          <label><b>Distance</b>
            <select>
              <option>2.5 miles</option>
              <option>5 miles</option>
              <option>10 miles</option>
            </select>
          </label>
        </div>
        <div>
          <label className="checkbox-group-colomn"><b>Category</b>
            <div>
              <input type="checkbox" name="checkbox1"/>
              <label htmlFor="checkbox1">Order Ahead</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox2"/>
              <label htmlFor="checkbox2">Rewards</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox3"/>
              <label htmlFor="checkbox3">Specials</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox4"/>
              <label htmlFor="checkbox4">Try Something New</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox5"/>
              <label htmlFor="checkbox5">Fast</label>
            </div>
          </label>
        </div>       
      </div>
    )
  }
}