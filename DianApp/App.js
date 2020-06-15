/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Store from './src/store/store';
import AppRouter from './src/routes/Routes';

const App = () => (
  <Provider store={Store}>
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={{ flex: 1 }}>
            <AppRouter />
  </KeyboardAvoidingView>
  </Provider>

);

export default App;





