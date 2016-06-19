/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { AppRegistry } from 'react-native';
import { Top } from './app';
import store from './store';

var store = configureStore()

class JPLNG extends Component {
  render() {
    return (
      <Provider store={store}>
        <Top />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('JPLNG', () => JPLNG);
