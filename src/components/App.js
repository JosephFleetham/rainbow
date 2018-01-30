import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ImageList from  './ImageList.js'
import Nav from './Nav.js'
import axios from 'axios';
import DATA from '../utils/data.json';

class App extends Component {

  render() {
    return (
      <div>
        <div className="nav">
          <Nav

          />
        </div>
        <div className="body">

        </div>
      </div>
    )
  }
}

export default App;
