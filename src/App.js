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
  $textColor: '#0275d8'
});

export default () => <Navigator/>