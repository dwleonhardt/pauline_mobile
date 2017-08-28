import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableHighlight, Animated } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";



class ItemList extends Component {
  constructor(props){
    super(props);
    this.state = {
        expanded: true,
        animation: new Animated.Value()
    };
  }
  toggle(){

  }
  render() {
  return (
    <List>
      <FlatList
        data={this.props.dailyItems}
        keyExtractor={item => item.scheduled_item_id}
        renderItem={({ item }) => (
          <ListItem
            dailyItems
            title={`${item.title}`}
            subtitle={item.instructions}
            textInput={true}
          />

        )}
      />
    </List>
  );
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


export default ItemList;
