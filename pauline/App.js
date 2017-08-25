import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import DailyItems from './components/DailyItems';
import Home from './components/Home';
import { Root } from './config/router'


export default class App extends React.Component {
  render() {
    return (
      <Root/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Pauline', () => Pauline);
