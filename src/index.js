import React from 'react';
import ReactDOM from 'react-dom';
import Images from "./components/images.js";
import Nav from "./components/nav.js";
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/gallery" component={Images}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
