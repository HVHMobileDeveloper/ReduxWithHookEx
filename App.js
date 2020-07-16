/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/screen/Main';
import store from './src/redux/store';

const App =()=> {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

export default App
