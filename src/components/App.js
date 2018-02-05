import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ImageList from  './ImageList.js'
import Nav from './Nav.js'
import axios from 'axios';
import DATA from '../utils/data.json';
import Footer from './Footer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  toggleClick () {
    this.setState({ clicked: true })
  }
  render() {
    if (this.state.clicked === false) {
      return (
        <div className="body">
          <div className="pusher">
            <div className="ui inverted vertical masthead center aligned segment">
              <div className="ui container">
                <Nav

                />
              </div>
              <div className="ui text container">
                <h1 className="ui inverted header">
                  Rainbow
                </h1>
                <h2>
                  Rainbows Gallery
                </h2>
                <button className="ui huge primary button" onClick={this.toggleClick.bind(this)}>
                    Go to Gallery
                  <i className="right arrow icon">
                  </i>
                </button>
              </div>
            </div>
            <Footer

            />
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="body">
          <div className="pusher">
            <div className="ui inverted vertical masthead center aligned segment">
              <div className="ui container">
                <Nav

                />
              </div>
              <ImageList

              />
            </div>
            <Footer

            />
          </div>
        </div>
      )
    }
  }
}

export default App;
