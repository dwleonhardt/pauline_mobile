import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class DailyItems extends React.Component {
  constructor () {

    super();
  }


  render() {
    // console.log(this.props.dailyItems);
    let title = [];
    for (var key in this.props.dailyItems) {
      title.push(this.props.dailyItems[key].title);
    }
    var names = this.props.dailyItems.map((items, i) => {
      console.log(items);
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
