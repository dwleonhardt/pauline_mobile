import React from 'react';
import { StackNavigator } from 'react-navigation';
import DailyItems from '../components/DailyItems';
import Home from '../components/Home';

export const Root = StackNavigator({
  Home: {
    screen: Home,
  },
  DailyItems: {
    screen: DailyItems,
  }
})
