import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import News from './components/News'

export default class mobile extends Component {
  render() {
    return (
      <News/>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
