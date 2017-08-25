import React from 'react';
import { StyleSheet, Text, View, Button, ToolbarAndroid, Image, TouchableHighlight, Alert, Super } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from './Nav.js';

class Home extends React.Component {
  constructor () {

    super();
  }


  render() {
    var names = this.props.names.map((names) => {return (<Text>{names}</Text>)})
    console.log(this.props.names);

    return (
      <View style={{flex: 1}}>
        <Nav />
        <View style={styles.body}>
          <Image style={styles.circle} source={require('./cat.png')} />
          <View style={styles.menu}>
            <TouchableHighlight style={styles.square} onPress={()=>Alert.alert('Daily Schedule')} underlayColor='grey'>
              <Text style={styles.icon}>Daily Schedule</Text>
            </TouchableHighlight>
            <View style={styles.square}>
              {/* <Text style={styles.icon}>Med Schedule</Text> */}
              {names}
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
