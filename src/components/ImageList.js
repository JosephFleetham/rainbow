import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';
import { getImageData } from '../utils/rainbow-api';
import Image from './Image.js'
import DATA from '../utils/data.json';

class ImageList extends Component {

  constructor() {
    super()
    this.state = {
      images: [],
      index: [],
      data: []
     };
  }

  componentWillMount() {
    this.setState({data: DATA});
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  // getImages() {
  //   getImageData().then((images) => {
  //     this.setState({ images });
  //   });
  // }
  //
  // componentWillMount() {
  //   this.getImages();
  // }



  render() {
    const images = this.state.data.map((image) => (
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
