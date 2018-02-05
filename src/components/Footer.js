import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import $ from 'jquery';
import NewImageForm from './NewImageForm';

class Footer extends Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">
                About
              </h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Contact
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">
                Admin
              </h4>
              <div className="ui inverted link list">
                <a className="login"  href="#">
                {
                   (isLoggedIn()) ? ( <div className="ui inverted link list" onClick={() => logout()}>Log out </div> ) : ( <div className="ui inverted link list" onClick={() => login()}>Log In</div> )
                 }
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
