import React, { Component } from 'react';

class NewImageForm extends Component {
  constructor() {
    super();
    this.state = {
      newImages: []
    };
  }
  componentWillMount () {

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
  handleSubmit (evt) {
    evt.preventDefault();
    console.log(`${this.state.title} + ${this.state.description} + ${this.state.photo}`)
    //we will be tying this into the POST method in a bit
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
