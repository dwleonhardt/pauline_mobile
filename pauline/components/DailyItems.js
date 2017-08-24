import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class DailyItems extends React.Component {
  constructor () {

    super();
  }


  render() {
    var names = this.props.dailyItems.map((items) => {return (<Text>{items}</Text>)});
    console.log(this.props.dailyItems);

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
