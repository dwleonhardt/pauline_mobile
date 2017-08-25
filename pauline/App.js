import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyItems from './components/DailyItems';
import Home from './components/Home';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyItems: [],
    }
  }

  componentDidMount() {
    return fetch('https://paulineserver.herokuapp.com/daily_items')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dailyItems: responseJson,
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
