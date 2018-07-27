import React, { Component } from 'react';
import './App.css';

import {
  Route,
} from 'react-router-dom'

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import PersonScreen from './Screen/PersonScreen';
import UpdatePersonScreen   from './Screen/UpdatePersonScreen';
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/PersonScreen'} component={PersonScreen} />
        <Route path={'/UpdatePersonScreen'} component={UpdatePersonScreen} />
      </div>
    );
  }
}
export default App;
