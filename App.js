/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Login from './src/Screens/Login/Login.js'

export default class App extends Component {
    render() {
      return (
        <View>
          <Login />
        </View>
      );
    }
}
