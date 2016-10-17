import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';



class App extends Component {
  render() {
    return (
      <div>React simple starter
      {this.props.children}

      </div>
    );
  }
}

export default connect(null,actions)(App);
