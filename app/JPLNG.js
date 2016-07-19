import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Top from './Top';
import store from './store';

class JPLNG extends Component {
  render() {
    return (
      <Provider store={store}>
        <Top />
      </Provider>
    );
  }
}

export default JPLNG;
