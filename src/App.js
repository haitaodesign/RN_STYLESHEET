/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './navigation';

// 定义全局变量
EStyleSheet.build({
  $outline: 1,
  $textColor: '#0275d8',
  $buttonColor: 'blue'
});
module.hot.accept(() => {
  EStyleSheet.clearCache();
  EStyleSheet.build();
});
export default () => <Navigator/>

