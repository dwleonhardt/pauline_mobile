import React from 'react';
import { StyleSheet, Text, View, Button, ToolbarAndroid, Image, TouchableHighlight, Alert, Super } from 'react-native';

// const dayConverter = (date) => {
//   var dayStart = new Date(date.setHours(0,0,0,0)).toUTCString();
//   var dayEnd = new Date(date.setDate(date.getDate() + 1)).toUTCString();
//   var day = JSON.stringify({start:`${dayStart}`, end:`${dayEnd}`});
//   return getRange(day);
// }

// getRange = (range) => {
//   console.log(range);
//   return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
//   .then((response) => response.json())
//   .then((responseJson) => {
//     responseJson = responseJson.sort(function(x, y){
//       return x.start_time - y.start_time;
//     })
//     return responseJson;
//     // this.setState({
//     //   dailyItems: responseJson,
//     // });
//   })
// }

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyItems: [],
      today: new Date(),
    }
  }
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    // NOTE: this is where I'm defaulting the date back to where the seed data is REMOVE IN PRODUCTION
    let day = new Date(this.state.today.setDate(this.state.today.getDate()-1))
    // END

    this.dayConverter(day);
  }

  getRange = (range) => {
    return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.sort(function(x, y){
        return x.start_time - y.start_time;
      })
      this.setState({
        dailyItems: responseJson,
      });
    })
  }

  dayConverter = (date) => {
    var dayStart = new Date(date.setHours(0,0,0,0)).toUTCString();
    var dayEnd = new Date(date.setDate(date.getDate() + 1)).toUTCString();
    var day = JSON.stringify({start:`${dayStart}`, end:`${dayEnd}`});
    this.getRange(day);
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={styles.body}>
          <Image style={styles.circle} source={require('./cat.png')} />
          <View style={styles.menu}>
            <TouchableHighlight style={styles.square} onPress={() => navigate('DailyItems', {
              dailyItems: this.state.dailyItems,
              today: this.state.today,
              dayConverter: this.dayConverter
            })} underlayColor='grey'>
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
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
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
    borderRadius: 2,
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
