import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';
import { getImageData } from '../utils/rainbow-api';
import Image from './Image.js'
import axios from 'axios';
import Footer from './Footer.js'


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
      axios.get('https://api.mlab.com/api/1/databases/rainbow/collections/images?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5')
          .then(res => {
              this.setState({
                  data: res.data
              });
          })
  }
  componentDidMount() {
      this.loadImagesFromServer();
      setInterval(this.loadImagesFromServer, this.state.pollInterval);
      console.log(this.state.data)
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
        data = {this.state.data}
        key={image['_id']}
        title={image.title}
        description={image.description}
        photo={image.photo}
        uniqueID={image._id.$oid}
      />
    ));
    return (
      <div>
      <Nav />
        <div id="list">
          <div className="ui three stackable cards">
            {images}
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default ImageList;
