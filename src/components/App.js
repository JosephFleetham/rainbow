import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ImageList from  './ImageList.js'
import Nav from './Nav.js'
import axios from 'axios';
import DATA from '../utils/data.json';
import Footer from './Footer.js'
import { Router, Route, browserHistory, Redirect, Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="pusher">
          <div className="ui vertical masthead center aligned segment">
            <Nav

            />
            <div id="homebackground">
              <div className="ui text container">
                <h1 className="ui header">
                  Round River Creations
                </h1>
                <div id="textbox">
                </div>
                <div id="hometext">
                  <h2>
                    Made with love in Arcata, CA
                  </h2>
                  <h2>
                    <Link to="/gallery">Go to Gallery</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Footer

          />
        </div>
      </div>
    )
  }
}

export default App;
