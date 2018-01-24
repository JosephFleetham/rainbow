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
    console.log(this.state.description);
  }
  handleSubmit (evt) {
    const newImages = this.state.newImages;
    console.log("wowwow");
    // newCards.push(
    //   {
    //     "id": (JSON.parse(localStorage.getItem("cards")).length + 1).toString(),
    //     "title": this.state.title,
    //     "description": this.state.description,
    //     "photo": this.state.photo,
    //     "author": "",
    //     "authorPhoto": "",
    //     "time": "",
    //     "votes": "",
    //     "comments": ""
    //   },
    // );
    // var arr = JSON.parse(localStorage.getItem("cards")) || [];
    // arr.push(
    //   this.state.newCards[0]
    // );
    // localStorage.setItem('cards', JSON.stringify(arr))
    // console.log(JSON.parse(localStorage.getItem('cards')))
    // this.props.app.setState({ cards: JSON.parse(localStorage.getItem('cards')) });
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
            onChange={this.updateTitleValue}
          />
          <br />
          <br />
          <label for="lname" id="title">Description: </label>
          <br />
          <br />
          <textarea
            name='description'
            defaultValue={this.props.description}
            onChange={this.updateDescriptionValue}
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
            onChange={this.updatePhotoValue}
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
