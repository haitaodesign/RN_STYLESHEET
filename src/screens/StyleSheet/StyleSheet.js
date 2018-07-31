import * as React from 'react';
import { View, Text, StyleSheet,PixelRatio } from 'react-native';
import { styles } from '../Home';
export default class StyleSheet2 extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {/* <Text>常量（StyleSheet.hairlineWidth）：{StyleSheet.hairlineWidth}</Text> */}
        <View style={{marginLeft: 20, marginRight: 20, width: 300,height:200, borderWidth: 1/PixelRatio.get()}}>
          <Text>1像素边框：1/PixelRatio.get()</Text>
        </View>
      </View>
    )
  }
}