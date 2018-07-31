import React, { Component } from 'react';
import './App.css';

import {
  Route,
} from 'react-router-dom'

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import PersonScreen from './Screen/PersonScreen';
import UpdatePersonScreen   from './Screen/UpdatePersonScreen';
import UpdateMessage from './Screen/UpdateMessage';
import UpdatePassword from './Screen/UpdatePassword';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/PersonScreen'} component={PersonScreen} />
        <Route path={'/UpdatePersonScreen'} component={UpdatePersonScreen} />
        <Route path={'/UpdateMessage'} component={UpdateMessage} />
        <Route path={'/UpdatePassword'} component={UpdatePassword} />
      </div>
    );
  }
}
export default App;
