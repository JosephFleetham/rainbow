import React, { Component } from 'react';
import ImageList from './ImageList.js';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { deleteData } from '../utils/rainbow-api';
import axios from 'axios';
import ImageDetail from './ImageDetail.js'
import { Router, Route, browserHistory, Link } from 'react-router';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      photo: ''
    }
    this.deleteImage = this.deleteImage.bind(this);
  }
  deleteImage(e) {
    e.preventDefault();
    deleteData(this.props.uniqueID);

  }
  imageDetailRedirect() {
    console.log(this.props.uniqueID);
  }

  componentWillMount(){
    console.log(this.props)
  }


  render() {
    if (isLoggedIn()) {
      return (
        <div id="box">
          <div id="imagecover">
          <Link to={{
            pathname: `/gallery/` + this.props.uniqueID,
            state: {
              uniqueID: this.props.uniqueID,
              title: this.props.title,
              description: this.props.description,
              photo: this.props.photo
            }
          }}>
            <img src={this.props.photo} alt="cover"></img>
          </Link>

          </div>
          <div id='x'>
            <img src='https://cdn3.iconfinder.com/data/icons/defcon/512/delete-512.png' onClick={this.deleteImage}></img>
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="box">
          <div id="imagecover">
          <Link to={{
            pathname: `/gallery/` + this.props.uniqueID,
            state: {
              uniqueID: this.props.uniqueID,
              title: this.props.title,
              description: this.props.description,
              photo: this.props.photo
            }
          }}>
            <img src={this.props.photo} alt="cover"></img>
          </Link>

          </div>
        </div>
      )
    }
  }
}

export default Image;
