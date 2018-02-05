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
          <div className="ui inverted vertical masthead center aligned segment">
            <Nav

            />
            <div className="ui text container">
              <h1 className="ui inverted header">
                Rainbow
              </h1>
              <h2>
                Rainbows Gallery
              </h2>
              <Link to="/gallery">Here</Link>
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
