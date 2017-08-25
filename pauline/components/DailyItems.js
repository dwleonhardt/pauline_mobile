import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class DailyItems extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dailyItems: this.props.navigation.state.params.dailyItems
    }
  }
  static navigationOptions = {
    title: 'Daily Items',
  };


  render() {
    let title = [];
    for (var key in this.state.dailyItems) {
      title.push(this.state.dailyItems[key].title);
    }
    var names = this.state.dailyItems.map((items, i) => {
      return (
        <View key={items.id}>
          <Text>{items.title}</Text>
          <Text>{items.instructions}</Text>
        </View>
      )
    });

    return (
      <View style={{flex: 1}}>
        {names}
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
