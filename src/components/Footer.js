import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import $ from 'jquery';
import NewImageForm from './NewImageForm';

class Footer extends Component {
  render() {
    return (
      <div className="ui vertical footer segment">
        <div className="ui container">
          <div className="ui stackable divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui header">
                About
              </h4>
              <div className="ui link list">
                <a href="#" className="item">
                  Contact
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui header">
                Admin
              </h4>
              <div className="ui link list">
                <a className="login"  href="#">
                {
                   (isLoggedIn()) ? ( <div className="ui link list" onClick={() => logout()}>Log out </div> ) : ( <div className="ui link list" onClick={() => login()}>Log In</div> )
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
