import React, { Component } from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Nav from './Nav.js';
import axios from 'axios';
import Footer from './Footer.js'

class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      photo: '',
      notification: '',
      editClicked: false,
      saveClicked: false
    }
    this.editImage = this.editImage.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }
  componentWillMount() {
    this.setState({

    })
  }
  updateDescriptionValue (evt) {
    this.setState({
      description: evt.target.value
    });
    console.log(this.state.description);
  }
  updateTitleValue (evt) {
    this.setState({
      title: evt.target.value
    });
    console.log(this.state.title);
  }
  handleEditClick(e) {
    this.setState({editClicked: !this.state.editClicked});
  }
  handleSaveClick(e) {
    this.setState({saveClicked: !this.state.saveClicked});
    this.editImage(e)
  }
  editImage(e) {
    e.preventDefault();
    let id = this.props.location.state.uniqueID;
    let title = this.state.title
    let description = this.state.description
    let photo = (this.props.location.state.photo) ? this.props.location.state.photo : null;
    let image = {
      title: title,
      description: description,
      photo: photo
    };
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
    });
    axios.put('http://localhost:3333/api/images/' + id, image)
      .then(res => {
        console.log('Image edited');
        this.setState({notification: "Changes sucessfully saved"})
        this.setState({editClicked: false});
        this.setState({saveClicked: true});
        console.log(this.state);
        console.log(this.state.editClicked);
        console.log(this.state.saveClicked);
        this.setState({
          title: (this.state.title) ? this.state.title : this.props.location.state.title,
          description: (this.state.description) ? this.state.description : this.props.location.state.description

        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    if (isLoggedIn() && this.state.editClicked === true) {
      return (
        <div>
          <Nav/>
          <div id="details">
            <div className="ui segment">
              <div id="textbox1">
                <textarea
                  ref='title'
                  defaultValue={(this.state.title) ? this.state.title : this.props.location.state.title}
                  onChange={this.updateTitleValue.bind(this)}
                  rows="2"
                  cols="40"
                  placeholder="Enter title here..."
                />
              </div>
              <br />
              <img className="ui centered big image" src={this.props.location.state.photo}></img>
              <br />
              <br />
              <div id="textbox2">
                <textarea
                  ref='description'
                  defaultValue={(this.state.description) ? this.state.description : this.props.location.state.description}
                  onChange={this.updateDescriptionValue.bind(this)}
                  rows="10"
                  cols="100"
                  placeholder="Enter description here..."
                />
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div id="editbutton">
            <div className="ui center aligned basic segment">
              <button className='ui large blue button' onClick={this.handleEditClick}>
                Edit
              </button>
              <button className='ui large blue button' onClick={this.handleSaveClick}>
                Save
              </button>
              <br />
              <span>
                {this.state.notification}
              </span>
            </div>
          </div>
          <Footer />
        </div>
        // <div>
        //   <Nav />
        //   <h1>WOW DETAILS LOGGED IN</h1>
        //   <br/>
        //   <h1>{this.props.location.state.uniqueID}</h1>
        //   <h1>{this.props.location.state.title}</h1>
        //   <h1>{this.props.location.state.description}</h1>
        //   <h1>{this.props.location.state.photo}</h1>

        // </div>
      )
    }
    else if ((isLoggedIn() && this.state.editClicked === false && this.state.saveClicked === false)) {
      return (
        <div>
          <div>
            <Nav/>
            <div id="details">
              <div className="ui segment">
                <h1 className="ui center aligned header">{this.props.location.state.title}</h1>
                <br />
                <img className="ui centered big image" src={this.props.location.state.photo}></img>
                <br />
                <br />
                <div id="booyahbox">
                  <p>{this.props.location.state.description}</p>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div id="editbutton">
            <div className="ui center aligned basic segment">
              <button className='ui large blue button' onClick={this.handleEditClick}>
                Edit
              </button>
              <button className='ui large blue button' onClick={this.editImage}>
                Save
              </button>
              <br />
              <span>
                {this.state.notification}
              </span>
            </div>
          </div>
          <Footer />
        </div>
        // <div>
        //   <h1>WOW DETAILS NOT LOGGED IN</h1>
        //   <br/>
        //   <h1>{this.props.location.state.uniqueID}</h1>
        //   <h1>{this.props.location.state.title}</h1>
        //   <h1>{this.props.location.state.description}</h1>
        //   <h1>{this.props.location.state.photo}</h1>
        // </div>
      )
    }
    else if ((isLoggedIn() && this.state.saveClicked === true && this.state.editClicked === false)) {
      return (
        <div>
          <div>
            <Nav/>
            <div id="details">
              <div className="ui segment">
                <h1 className="ui center aligned header">{this.state.title}</h1>
                <br />
                <img className="ui centered big image" src={this.props.location.state.photo}></img>
                <br />
                <br />
                <div id="booyahbox">
                  <p>{this.state.description}</p>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div id="editbutton">
            <div className="ui center aligned basic segment">
              <button className='ui large blue button' onClick={this.handleEditClick}>
                Edit
              </button>
              <button className='ui large blue button' onClick={this.editImage}>
                Save
              </button>
              <br />
              <span>
                {this.state.notification}
              </span>
            </div>
          </div>
          <Footer />
        </div>
        // <div>
        //   <h1>WOW DETAILS NOT LOGGED IN</h1>
        //   <br/>
        //   <h1>{this.props.location.state.uniqueID}</h1>
        //   <h1>{this.props.location.state.title}</h1>
        //   <h1>{this.props.location.state.description}</h1>
        //   <h1>{this.props.location.state.photo}</h1>
        // </div>
      )
    }
    else {
      return (
        <div>
          <Nav/>
          <div id="details">
            <div className="ui segment">
              <h1 className="ui center aligned header">{this.props.location.state.title}</h1>
              <br />
              <img className="ui centered big image" src={this.props.location.state.photo}></img>
              <br />
              <br />
              <div id="booyahbox">
                <p>{this.props.location.state.description}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default ImageDetail
