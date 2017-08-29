import React, { Component } from 'react';
import { AppRegistry, FlatList, ListView, StyleSheet, Text, View, TouchableHighlight, Animated } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";



const Row = (props) => {

  var start_time = new Date(props.start_time);
  start_time = start_time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <View style={styles.container}>
      <Text>{start_time}</Text>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
  }
});

export default Row;
