import React from 'react';
import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import ItemList from '../components/ItemList';


class DailyItems extends React.Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Daily Schedule',
  };

  prevDay = () => {
    let day = this.props.navigation.state.params.today;
    day = new Date(day.setDate(day.getDate()-1));
    this.props.navigation.state.params.dayConverter(day);
  }
  nextDay = () => {
    let day = this.props.navigation.state.params.today;
    day = new Date(day.setDate(day.getDate()+1));
    this.props.navigation.state.params.dayConverter(day);
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="backward" onPress={() => this.prevDay()}/>
        <Button title="forward" onPress={() => this.nextDay()}/>
        <ItemList {...this.props.navigation.state.params} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  nav: {
    flex: 0.3,
    backgroundColor: '#E5879E'
  },
});

export default DailyItems;
