import React from 'react';
import { StyleSheet, Text, View, Button, ToolbarAndroid, Image, TouchableHighlight, Alert, Super } from 'react-native';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
    }
  }
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    // NOTE: this is where I'm defaulting the date back to where the seed data is REMOVE IN PRODUCTION
    // END
    // day.setDate(day.getDate()-1)
    this.dayConverter(this.state.today);
  }


  getRange = (range) => {
    console.log(range);
    return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.sort(function(x, y){
        return x.start_time - y.start_time;
      })
      if (this.state.dailyItems) {
        let copy = Object.assign({}, this.state);
        copy.dailyItems = responseJson;
        this.setState(copy);
        this.refreshDay();
      }
      else {
        let copy = Object.assign({}, this.state);
        copy.dailyItems = responseJson;
        this.setState(copy);
      }
    })
  }

  dayConverter = (date) => {
    // // console.log(this.state.today !== date);
    // // console.log('before',this.state.today);
    // // let copy = Object.assign({}, this.state);
    // // copy.today = date;
    // this.setState({today: date});
    // console.log(this.state);
    console.log('converter',date);
    let dayStart = new Date(date.setHours(0,0,0,0)).toUTCString();
    let dayEnd = new Date(date.setDate(date.getDate() + 1)).toUTCString();
    let range = JSON.stringify({start:`${dayStart}`, end:`${dayEnd}`});
    this.getRange(range);
  }

  refreshDay = () => {
    this.props.navigation.navigate('DailyItems',
      {
        dailyItems: this.state.dailyItems,
        today: this.state.today,
        dayConverter: this.dayConverter
      }
    )
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
              dayConverter: this.dayConverter,
              refreshDay: this.refreshDay
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
