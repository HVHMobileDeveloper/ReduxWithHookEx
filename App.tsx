/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import store from './src/redux/store';
import Router from './src/screen/Router/ApplicationNavigation';
import { Provider } from 'react-redux';

const App =()=> {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App
