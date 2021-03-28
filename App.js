// In App.js in a new project

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import HomeScreen from './screens/HomeScreen';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store ={createStore(reducers)}>
           <HomeScreen />
      </Provider>
    );
  }
}
