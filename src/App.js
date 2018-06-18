import React, { Component } from 'react';
import './App.css';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';

import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Route exac path="/" component={ Home } />
        </div>
      </Router>

    );
  }
}

App.PropTypes = {
  history: PropTypes.any.isRequired
}

export default App;
