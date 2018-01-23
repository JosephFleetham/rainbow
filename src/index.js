import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from "./components/ImageList.js";
import Nav from "./components/Nav.js";
import App from "./components/App.js";
import { Router, Route, browserHistory } from 'react-router';
import Admin from "./components/Admin.js"
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback.js'

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/gallery" component={ImageList}/>
        <Route path="/admin" component={Admin} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
