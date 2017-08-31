import React from 'react';
import { StyleSheet, Text, View, Button, ToolbarAndroid, Image, TouchableHighlight, Alert, Super } from 'react-native';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dateString: '',
    }
  }
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    this.dayConverter(this.state.today);
    this.updateDay(this.state.today);
  }


  getRange = (range) => {
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
    let dateCopy = new Date(date);
    let dayStart = new Date(dateCopy.setHours(0,0,0,0)).toUTCString();
    let dayEnd = new Date(dateCopy.setDate(date.getDate() + 1)).toUTCString();
    let range = JSON.stringify({start:`${dayStart}`, end:`${dayEnd}`});
    this.updateDay(date);
    this.getRange(range);
  }

  updateDay = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString('en-US', options);
    let copy = Object.assign({}, this.state);
    copy.dateString = dateString;
    this.setState(copy);
  }

  refreshDay = () => {
    this.props.navigation.navigate('DailyItems',
      {
        dailyItems: this.state.dailyItems,
        today: this.state.today,
        dayConverter: this.dayConverter,
        refreshDay: this.refreshDay,
        updateDay: this.updateDay,
        dateString: this.state.dateString
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
              refreshDay: this.refreshDay,
              updateDay: this.updateDay,
              dateString: this.state.dateString,
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
