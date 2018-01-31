import React, { Component } from 'react';
import ImageList from './ImageList.js';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { deleteData } from '../utils/rainbow-api';
import axios from 'axios';

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
    // this.updateComment = this.updateComment.bind(this);
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  deleteImage(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    axios.delete('http://localhost:3333/api/images/' + id)
      .then(res => {
        console.log('Image deleted');
        console.log(id)
      })
      .catch(err => {
        console.error(err);
      });
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
            <button className='ui large blue button' onClick={this.deleteImage}>
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
