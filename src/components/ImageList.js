import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';
import { getImageData } from '../utils/rainbow-api';
import Image from './Image.js'
import axios from 'axios';


class ImageList extends Component {
  constructor() {
      super();
      this.state = {
        data: [],
        pollInterval: 2000
      };
      this.loadImagesFromServer = this.loadImagesFromServer.bind(this);
  }
  loadImagesFromServer() {
      axios.get('http://localhost:3333/api/images')
          .then(res => {
              this.setState({
                  data: res.data
              });
          })
  }
  componentDidMount() {
      this.loadImagesFromServer();
      setInterval(this.loadImagesFromServer, this.state.pollInterval);
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
        key={image['_id']}
        title={image.title}
        description={image.description}
        photo={image.photo}

      />
    ));
    return (
      <div>
        // <Nav/>
        <div className="ui three stackable cards">
          {images}
        </div>
      </div>
    );
  }
}

export default ImageList;
