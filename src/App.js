import React, { Component } from 'react';
import './App.css';

import {
  Route,
} from 'react-router-dom'

import LoginScreen from'./Screen/LoginScreen';
import RegisterScreen from'./Screen/RegisterScreen';
class App extends Component {
  render() {
    return (
     <div>
     <Route exact path={'/'} component={LoginScreen} />
          <Route path={'/RegisterScreen'} component={RegisterScreen}/>
     </div>
    );
  }
}
export default App;
