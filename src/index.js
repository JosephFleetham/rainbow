import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from "./components/ImageList.js";
import Nav from "./components/Nav.js";
import App from "./components/App.js";
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback.js'
import $ from 'jquery'
import NewImageForm from './components/NewImageForm.js';
import ImageDetail from './components/ImageDetail.js';
import Bypa from './components/Bypa.js'

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/gallery" component={ImageList}/>
        <Route path="/gallery/:image_id" component={ImageDetail} />
        <Route path="/callback" component={Callback} />
        <Route path="/bypa" component={Bypa} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
