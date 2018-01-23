import React, { Component } from 'react';
import ImageList from './ImageList.js';

class Image extends Component {
  render() {
    return (
      <div id="box">
        <img src={this.props.photo} alt="cover"></img>
        <div className="CardContent">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Image;
