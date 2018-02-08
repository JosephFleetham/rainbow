import React, { Component } from 'react';
import axios from 'axios';
import { getImageData } from '../utils/rainbow-api';

class NewImageForm extends Component {
  constructor() {
    super();
    this.state = {
      newImages: []
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
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let photo = this.state.photo.trim();
    if (!title || !description || !photo) {
      return;
    }
    console.log(this.state.data)
    console.log(this.props.data)
    this.handleImageSubmit({ title: title, description: description, photo: photo});
    this.setState({ title: '', description: '', photo: ''})
  }
  handleImageSubmit(image) {
    let images = this.state.images;
    image.id = Date.now();
    let newImages = images.concat([image]);
    this.setState({ data: newImages });
    axios.post('http://localhost:3333/api/images', image)
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
  render() {
    return (
      <div id='newDropdown'>
        <form action="/action_page.php">
          <label for="fname" id="title">Title: </label>
          <br />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Card title..."
            defaultValue={this.props.title}
            onChange={this.updateTitleValue.bind(this)}
          />
          <br />
          <br />
          <label for="lname" id="title">Description: </label>
          <br />
          <br />
          <textarea
            name='description'
            defaultValue={this.props.description}
            onChange={this.updateDescriptionValue.bind(this)}
            rows="4"
            cols="25"
            placeholder="Enter description here..."
          />
          <br />
          <br />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Image URL..."
            defaultValue={this.props.photo}
            onChange={this.updatePhotoValue.bind(this)}
          />
          <button className='ui large blue button' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewImageForm
