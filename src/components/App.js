import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Images from  './Images.js'
import Nav from './Nav.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Nav/>
        </div>
      </div>
    )
  }
}

export default App;
