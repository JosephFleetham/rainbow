import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './nav';
import { getImageData } from '../utils/rainbow-api';

class Images extends Component {

  constructor() {
    super()
    this.state = { images: [] };
  }

  getImages() {
    getImageData().then((images) => {
      this.setState({ images });
      console.log(this.state.images);      
    });
  }

  componentDidMount() {
    this.getImages();

  }

  render() {

    const { images }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Rainbows Gallery</h3>
        <hr/>

        { images.map((image, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ image.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { image.image } </p>
                  </div>
                </div>
              </div>
          ))}
      </div>
    );
  }
}

export default Images;
