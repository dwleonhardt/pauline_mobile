import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyItems from './components/DailyItems';

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
      console.log(responseJson);
      let items = [];
      for (var key in responseJson) {
        items.push(responseJson[key].title);
      }
      this.setState({
        dailyItems: items,
      });
    })
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <DailyItems dailyItems={this.state.dailyItems}></DailyItems>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
