/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Homescene} from './app/components/Homescene.js'

export default class tapolympics extends Component {
  render() {
    return (<Homescene />);
  }
}

AppRegistry.registerComponent('tapolympics', () => tapolympics);
