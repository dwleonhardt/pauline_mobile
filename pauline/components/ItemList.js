import React, { Component } from 'react';
import { AppRegistry, FlatList, ListView, StyleSheet, Text, View, TouchableHighlight, Animated } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import Row from '../components/Item'

class ItemList extends Component {
  constructor(props) {
  super(props);
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.state = {
    forLolz: this.props.dailyItems2,
    dataSource: ds.cloneWithRows(this.props.dailyItems),
  };
}

  render() {
    if ((this.props.dailyItems).length === 0) {
      return <Text>No Events Today</Text>
    }
    else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      );
    }

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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
})


export default ItemList;
