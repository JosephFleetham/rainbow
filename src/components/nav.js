import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import $ from 'jquery';
import NewImageForm from './NewImageForm';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
  }
  // componentWillMount () {
  //   this.setState({
  //     dropdownOpen: false
  //   })
  // }
  componentDidMount () {
    console.log(this.state.dropdownOpen)
  }
  toggleForm(e) {
    e.preventDefault();
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    if (this.state.dropdownOpen === true) {
      $('#menu').slideUp();
    }
    else {
      $('#menu').slideDown();
    }
  }
  render() {
    return (
      <div id="topnav">
        <div className="ui vertical masthead center aligned segment">
          <div className="ui container">
            <div className="ui large secondary pointing menu">
              <a className="item">
                About Me
              </a>
              <a className="item">
                Gallery
              </a>
              <div className="column">
                {
                  ( isLoggedIn() ) ?
                  <div className="ui dropdown">
                      <a className="yellow item" onClick={this.toggleForm.bind(this)}>Create a card...</a>
                      <div id="menu">
                        <NewImageForm
                          onFormSubmit={this.handleSubmit}
                        />
                      </div>
                  </div>
                    :  ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   <div className="ui three column grid">
      //     <div className="column">
      //       <div id="new">
      //         <a className="about" >About Me</a>
      //         <div className="menu">
      //
      //         </div>
      //       </div>
      //       <div id="reorder">
      //         <a className="contact"  href="#1">
      //           Contact Me
      //         </a>
      //       </div>
      //     </div>
      //       <div className="column">
      //         <div className="centered title" href="#"><h1>Rainbows Gallery</h1></div>
      //       </div>
      //     <div className="column">
      //
      //       <div id="clear">
      //         <a className="login"  href="#">
      //         {
      //            (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
      //          }
      //         </a>
      //       </div>
      //     </div>
      //     <div className="column">
      //       {
      //        ( isLoggedIn() ) ?
      //        <div className="ui dropdown">
      //            <a className="yellow item" onClick={this.toggleForm.bind(this)}>Create a card...</a>
      //            <div className="menu">
      //              <NewImageForm
      //                title = {this.props.title}
      //                description={this.props.description}
      //                photo={this.props.photo}
      //                data={this.props.data}
      //                app={this}
      //                onFormSubmit={this.handleSubmit}
      //                images={this.props.images}
      //              />
      //            </div>
      //        </div>
      //         :  ''
      //       }
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Nav;
