import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { login, logout, isLoggedIn } from '../utils/AuthService';

class Nav extends Component {

  render() {
    return (
      <div id="topnav">
        <div className="ui three column grid">
          <div className="column">
            <div id="new">
              <a className="about" >About Me</a>
              <div className="menu">

              </div>
            </div>
            <div id="reorder">
              <a className="contact"  href="#1">
                Contact Me
              </a>
            </div>
          </div>
            <div className="column">
              <div className="centered title" href="#"><h1>Rainbows Gallery</h1></div>
            </div>
          <div className="column">

            <div id="clear">
              <a className="login"  href="#">
              {
                 (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
               }
              </a>
            </div>
          </div>
          <div className="column">
            {
             ( isLoggedIn() ) ? <Link to="/admin">Add/Edit Images</Link> :  ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
