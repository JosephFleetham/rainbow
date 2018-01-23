import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';
import { getImageData } from '../utils/rainbow-api';
import Image from './Image.js'

class ImageList extends Component {

  constructor() {
    super()
    this.state = {
      images: [],
      index: []
     };
  }

  getImages() {
    getImageData().then((images) => {
      this.setState({ images });
    });
  }

  componentWillMount() {
    this.getImages();
  }



  render() {
    const images = this.state.images.map((image) => (
      <Image
        id={image.id}
        title={image.title}
        description={image.description}
        photo={image.photo}

      />
    ));
    return (
      <div>
        <Nav/>
        <div className="ui three stackable cards">
          {images}
        </div>
      </div>
    );
  }
}

export default ImageList;
