import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Home } from '../screens/Home'
import { StyleSheet } from '../screens/StyleSheet'
import Platform from '../screens/Platform'


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
  },
  Platform: {
    screen: Platform,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Platform',
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