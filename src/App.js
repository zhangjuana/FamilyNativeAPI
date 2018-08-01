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
import TabBarScreen from './Screen/TabBarScreen';
import HomeScreen from './Screen/HomeScreen';
import ProductListScreen from './Screen/ProductListScreen';
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
        <Route path={'/TabBarScreen'} component={TabBarScreen} />
        <Route path={'/HomeScreen'} component={HomeScreen} />
        <Route path={'/ProductListScreen'} component={ProductListScreen} />
      </div>
    );
  }
}
export default App;
