import React, { Component } from 'react';
import { Link } from 'react-router';
import Images from "./Images.js"
import Nav from './Nav.js';
import { getEditableImageData } from '../utils/rainbow-api';
import { login, logout, isLoggedIn } from '../utils/AuthService';


class Admin extends Component {
  constructor() {
    super()
    this.state = {
      images: []
     };
  }

  getImages() {
    getEditableImageData().then((images) => {
      this.setState({ images });
    });
  }


  componentDidMount() {
    this.getImages();
  }

  render() {
    const { images }  = this.state;
    return (
      <div>
        <Nav/>
        <div className="ui three stackable cards">
        {
         ( isLoggedIn() ) ?
         <div>
          YOU LOGGED IN WOW
         </div> :  ''
        }
          { images.map((image, index) => (
            <div id="box">
              <div className="card" key={index}>
                <div className="image">
                  {image.id}
                  {image.image_url}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Admin
