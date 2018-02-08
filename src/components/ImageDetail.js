import React, { Component } from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Nav from './Nav.js';
import axios from 'axios';

class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      photo: ''
    }
    this.editImage = this.editImage.bind(this);
  }
  componentWillMount() {
    this.setState({

    })
  }
  editImage(e) {
    e.preventDefault();
    let id = this.props.location.state.uniqueID;
    let title = (this.props.location.state.title) ? this.props.location.state.author : null;
    let description = (this.props.location.state.description) ? this.props.location.state.description : null;
    let photo = (this.props.location.state.photo) ? this.props.location.state.photo : null;
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
  render() {
    if (isLoggedIn()) {
      return (
        <div>
          <Nav />
          <h1>WOW DETAILS LOGGED IN</h1>
          <br/>
          <h1>{this.props.location.state.uniqueID}</h1>
          <h1>{this.props.location.state.title}</h1>
          <h1>{this.props.location.state.description}</h1>
          <h1>{this.props.location.state.photo}</h1>
          <button className='ui large blue button' onClick={this.editImage}>
            Edit
          </button>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>WOW DETAILS NOT LOGGED IN</h1>
          <br/>
          <h1>{this.props.location.state.uniqueID}</h1>
          <h1>{this.props.location.state.title}</h1>
          <h1>{this.props.location.state.description}</h1>
          <h1>{this.props.location.state.photo}</h1>
        </div>
      )
    }
  }
}

export default ImageDetail
