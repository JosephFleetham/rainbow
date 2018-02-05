import React, { Component } from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Nav from './Nav.js';

class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      photo: ''
    }
  }
  componentWillMount() {
    console.log(this.props.location.state);
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
