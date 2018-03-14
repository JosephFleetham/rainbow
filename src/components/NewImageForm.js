import React, { Component } from 'react';
import axios from 'axios';
import { getImageData } from '../utils/rainbow-api';

class NewImageForm extends Component {
  constructor() {
    super();
    this.state = {
      newImages: [],
      title: '',
      description: '',
      photo: '',
      fields: {},
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getImages() {
    getImageData().then((images) => {
      this.setState({ images });
    });
  }

  componentWillMount() {
    this.getImages();
  }
  updateTitleValue (evt) {
    this.setState({
      title: evt.target.value
    });
    console.log(this.state.title);
  }
  updateDescriptionValue (evt) {
    this.setState({
      description: evt.target.value
    });
    console.log(this.state.description);
  }
  updatePhotoValue (evt) {
    this.setState({
      photo: evt.target.value
    });
    console.log(this.state.photo);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.handleValidation();
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let photo = this.state.photo.trim();
    if (!title || !description || !photo) {
      return;
    }
    this.handleImageSubmit({ title: title, description: description, photo: photo});
    this.refs.title.value = '';
    this.refs.description.value = '';
    this.refs.photo.value = '';

  }
  handleImageSubmit(image) {
    let images = this.state.images;
    image.id = Date.now();
    let newImages = images.concat([image]);
    this.setState({ data: newImages });
    axios.post('https://api.mlab.com/api/1/databases/rainbow/collections/images?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5', image)
      .then(res => {
        this.setState({
          data: res
        });
        console.log("Sucessfully added");
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

   //Name
  if(!fields["title"]){
    formIsValid = false;
    errors["title"] = "Title cannot be empty";
  }

    if(typeof fields["title"] !== "undefined"){
      if(!fields["title"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
          errors["title"] = "Only letters and numbers";
      }
    }
  if(!fields["description"]){
    formIsValid = false;
    errors["description"] = "Description cannot be empty";
  }

    if(typeof fields["descritpion"] !== "undefined"){
      if(!fields["description"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
          errors["description"] = "Only letters and numbers";
      }
    }

  if(!fields["photo"]){
    formIsValid = false;
    errors["photo"] = "Photo cannot be empty";
  }


         //Email
        //  if(!fields["email"]){
        //     formIsValid = false;
        //     errors["email"] = "Cannot be empty";
        //  }
        //
        //  if(typeof fields["email"] !== "undefined"){
        //      let lastAtPos = fields["email"].lastIndexOf('@');
        //      let lastDotPos = fields["email"].lastIndexOf('.');
        //
        //      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        //        formIsValid = false;
        //        errors["email"] = "Email is not valid";
        //      }
        // }




        this.setState({errors: errors});
        console.log(this.state.errors)
        return formIsValid;
  }
  render() {
    return (
      <div id='newDropdown'>
        <form action="/action_page.php">
          <label for="fname" id="title">Title: </label>
          <br />
          <br />
          <input
            type="text"
            ref="title"
            placeholder="Card title..."
            defaultValue={this.state.title}
            onChange={this.updateTitleValue.bind(this)}
            value={this.state.fields["title"]}
          />
          <br />
          <br />
          <label for="lname" id="title">Description: </label>
          <br />
          <br />
          <textarea
            ref='description'
            defaultValue={this.state.description}
            onChange={this.updateDescriptionValue.bind(this)}
            rows="4"
            cols="25"
            placeholder="Enter description here..."
            value={this.state.fields["description"]}
          />
          <br />
          <br />
          <label for="lname" id="title">Image URL: </label>
          <br />
          <br />
          <input
            type="text"
            ref="photo"
            placeholder="Image URL..."
            defaultValue={this.state.photo}
            onChange={this.updatePhotoValue.bind(this)}
            value={this.state.fields["photo"]}
          />
          <br />
          <br />
          <button className='ui large blue button' onClick={this.handleSubmit}>
            Submit
          </button>
          <div className="ui error message">
            <i className="close icon"></i>
            <div className="result">
              {this.state.errors["title"]}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewImageForm
