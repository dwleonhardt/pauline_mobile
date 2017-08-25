import React from 'react';
import { StyleSheet, Text, View, Button, ToolbarAndroid, Image, TouchableHighlight, Alert, Super } from 'react-native';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyItems: [],
    }
  }
  static navigationOptions = {
    title: 'Home',
  };

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
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <View style={styles.body}>
          <Image style={styles.circle} source={require('./cat.png')} />
          <View style={styles.menu}>
            <TouchableHighlight style={styles.square} onPress={() => navigate('DailyItems', {dailyItems: this.state.dailyItems})} underlayColor='grey'>
              <Text style={styles.icon}>Daily Schedule</Text>
            </TouchableHighlight>
            <View style={styles.square}>
              <Text style={styles.icon}>Med Schedule</Text>
            </View>
          </View>
        </View>
      </View>
    )
 }

}
const styles = StyleSheet.create({
  nav: {
    flex: 0.3,
    backgroundColor: '#E5879E'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    // display: 'block'
  },
  menu: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  circle: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#A3A5A7',
  },
  square: {
    margin: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#cd87e5'
  },
  icon: {
    fontSize: 10,
  },
  patient: {
    color: '#A3A5A7',
    fontSize: 10,
  }
});

export default Home;
