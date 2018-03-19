import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ImageList from  './ImageList.js'
import Nav from './Nav.js'
import axios from 'axios';
import DATA from '../utils/data.json';
import Footer from './Footer.js'
import { Router, Route, browserHistory, Redirect, Link } from 'react-router';
import { getImageData } from '../utils/rainbow-api';


class App extends Component {
  constructor() {
      super();
      this.state = {
        data: [],
        pollInterval: 2000
      };
      this.loadImagesFromServer = this.loadImagesFromServer.bind(this);
  }
  loadImagesFromServer() {
      axios.get('https://api.mlab.com/api/1/databases/rainbow/collections/images?apiKey=1W1tqvCxoGyGvyM0tDQ2AipLCiFzEAS5')
          .then(res => {
              this.setState({
                  data: res.data
              });
          })
  }
  componentDidMount() {
      this.loadImagesFromServer();
      setInterval(this.loadImagesFromServer, this.state.pollInterval);
      console.log(this.state.data);
  }
  
  render() {
    return (
      <div className="body">
        <div className="pusher">
          <div className="ui vertical masthead center aligned segment">
            <Nav

            />
            <div id="homebackground">
              <div className="ui text container">
                <h1 className="ui header">
                  Round River Creations
                </h1>
                <h2>
                  Made with love in Arcata, CA
                </h2>
                <div id="textbox">
                </div>
                <div id="hometext">
                  <h2>
                    <Link to="/gallery">Go to Gallery</Link>
                  </h2>
                </div>
              </div>
            </div>
            <div id="homebox">
              <h1> Featured Items </h1>
              <div className="ui three column grid">
                <div className="column">
                  <div className="ui segment">
                    <img></img>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <img></img>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
            <div id="homeboxabout">
              <div className="ui grid">
                <div className="six wide column">
                  <img src="https://media1.fdncms.com/northcoast/imager/rainbow-marjanovich-spinning-yarn/u/original/2548441/poptart2.jpg" alt="rainbow">
                  </img>
                </div>
                <div className="ten wide column">
                  <h1 className="ui header">
                    About Me
                  </h1>
                  <p>
                  As I walk in nature, time transforms into a cyclical pattern.  There are no deadlines or 8-hour days, time just cycles.
                  The waves of the ocean, the breeze of the ever-changing air, the birds flying about, everything is cycling.
                  In and out of seasons, in and out of days, every minute new flowers bloom, and old flowers return to the Earth.
                  <br/>
                  <br />
                  Springtime.  I love this time of year.  Life buds out to greet the new, after a long cold winter.
                  I grew up in Wisconsin, where seasons were a bit more dramatic than they are here in Northern California.
                  However, after spending seven years down in San Diego, I was delighted to see the pussy willows blooming my first spring, up here in Humboldt County.
                  This thrilling discovery brought me back to my childhood, back to my roots.  My art progressed.
                  I graduated from Humboldt State University in 2010 with a major in Studio Arts. My focus was primarily sculpture and metalsmithing / jewelry..
                  </p>
                  <h3>
                    <Link to="/about">Learn more...</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div id="homeboxbypa">
              <div className="ui grid">
                <div className="eight wide column">
                  <h1 className="ui header">
                    BackYard Planetary Alliance
                  </h1>
                  <h2>
                  Mission Statement:
                  </h2>
                  <p>
                  To clean up the environment, create jobs for our community, reshape the idea of plastic into precious objects, YEAH!
                  We are artist and we are hampered in our artistic endeavors by the explosive amount of garbage in our environment.
                  In other words, we really feel the need to clean up first before we do art, which brought about what to do with all this garbage.
                  And in our search we found the PreciousPlastic.com website.
                  And the idea of recycling plastic to re-work it into more permanent objects, ‘precious’  the plastic into new functional quality Art-ifacts.
                  </p>
                  <h3>
                    <Link to="/bypa">Learn more...</Link>
                  </h3>
                </div>
                <div className="eight wide column">
                  <img src="https://ucarecdn.com/82f7e50a-6977-41b0-84ac-5056a91a0fda/-/crop/745x612/125,108/-/preview/" alt="bypa">
                  </img>
                </div>

              </div>
            </div>
          </div>
          <Footer

          />
        </div>
      </div>
    )
  }
}

export default App;
