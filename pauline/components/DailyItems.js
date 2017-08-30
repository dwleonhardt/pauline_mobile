import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import ItemList from '../components/ItemList';


class DailyItems extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dailyItems: this.props.navigation.state.params.dailyItems,
    }
  }

  static navigationOptions = {
    title: 'Daily Schedule',
  };


  render() {


    return (
      <View style={{flex: 1}}>
        <ItemList dailyItems={this.state.dailyItems}/>
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
