import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Home } from '../screens/Home'
import { StyleSheet } from '../screens/StyleSheet'
import Platform from '../screens/Platform'
import Dimensions from '../screens/Dimensions'
import ScreenUtil from '../screens/ScreenUtil'
import EStyleSheet from '../screens/EStyleSheet/EStyleSheet'
import REM from '../screens/REM'
import Percents from '../screens/Percents'
import Scaling from '../screens/Scaling'
import PseudoClass from '../screens/PseudoClass'
import ValueFunction from '../screens/ValueFunction'


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
  },
  Dimensions: {
    screen: Dimensions,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Platform',
    }
  },
  ScreenUtil: {
    screen: ScreenUtil,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Platform',
    }
  },
  EStyleSheet: {
    screen: EStyleSheet,
    navigationOptions: {
      header: () => null,
      headerTitle: 'EStyleSheet',
    }
  },
  REM: {
    screen: REM,
    navigationOptions: {
      header: () => null,
      headerTitle: 'EStyleSheet',
    }
  },
  Percents: {
    screen: Percents,
    navigationOptions: {
      header: () => null,
      headerTitle: 'EStyleSheet',
    }
  },
  Scaling: {
    screen: Scaling,
    navigationOptions: {
      header: () => null,
      headerTitle: 'EStyleSheet',
    }
  },
  PseudoClass: {
    screen: PseudoClass,
    navigationOptions: {
      header: () => null,
      headerTitle: 'EStyleSheet',
    }
  },
  ValueFunction: {
    screen: ValueFunction,
    navigationOptions: {
      header: () => null,
      headerTitle: 'ValueFunction',
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