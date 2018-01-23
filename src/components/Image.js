import React, { Component } from 'react';
import ImageList from './ImageList.js';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { deleteData } from '../utils/rainbow-api';

class Image extends Component {

  handleDelete () {
    deleteData();
  }

  render() {
    if (isLoggedIn()) {
      return (
        <div id="box">
          <img src={this.props.photo} alt="cover"></img>
          <div className="CardContent">
            <h1>{this.props.title}</h1>
            <h2>YOU ARE LOGGED IN</h2>
            <p>{this.props.description}</p>
            <button className='ui large blue button' onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="box">
          <img src={this.props.photo} alt="cover"></img>
          <div className="CardContent">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
        </div>
      )
    }
  }
}

export default Image;
