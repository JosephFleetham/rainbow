import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';
import { getImageData } from '../utils/rainbow-api';
import Admin from './Admin.js'

class Images extends Component {

  constructor() {
    super()
    this.state = {
      images: []
     };
  }

  getImages() {
    getImageData().then((images) => {
      this.setState({ images });
    });
    console.log(this.state.images);
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

export default Images;
