import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Home } from '../screens/Home'
import { StyleSheet } from '../screens/StyleSheet'


const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Home',
    }
  },
  StyleSheet: {
    screen: StyleSheet,
    navigationOptions: {
      header: () => null,
      headerTitle: 'StyleSheet',
    }
  }
},{
  headerMode: 'screen'
})

export default createStackNavigator ({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header: () => null
    }
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    paddingTop: StatusBar.currentHeight
  }
})