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
    this.editImage = this.editImage.bind(this);
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
  editImage(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let title = (this.state.title) ? this.state.author : null;
    let description = (this.state.description) ? this.state.description : null;
    let photo = (this.state.photo) ? this.state.photo : null;
    let image = {
      title: title,
      description: description,
      photo: photo
    };
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      title: '',
      description: '',
      photo: ''
    });
    axios.put('http://localhost:3333/api/images/' + id, image)
      .then(res => {
        console.log('Image edited');
      })
      .catch(err => {
        console.log(err);
      })
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
          <img src={this.props.photo} alt="cover"></img>
          <div className="CardContent">
          <h1><Link to={{
            pathname: `/gallery/` + this.props.uniqueID,
            state: {
              uniqueID: this.props.uniqueID,
              title: this.props.title,
              description: this.props.description,
              photo: this.props.photo
            }
          }}>DETAILS</Link></h1>
            <h1>{this.props.title}</h1>
            <h2>YOU ARE LOGGED IN</h2>
            <p>{this.props.description}</p>
            <h1>{this.props.uniqueID}</h1>
            <button className='ui large blue button' onClick={this.deleteImage}>
              Delete
            </button>
            <button className='ui large blue button' onClick={this.editImage}>
              Edit
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
          <h1><Link to={{
            pathname: `/gallery/` + this.props.uniqueID,
            state: {
              uniqueID: this.props.uniqueID,
              title: this.props.title,
              description: this.props.description,
              photo: this.props.photo
            }
          }}>DETAILS</Link></h1>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <h1>{this.props.uniqueID}</h1>
          </div>
        </div>
      )
    }
  }
}

export default Image;
