import * as React from 'react';
import { View, Text, StyleSheet, PixelRatio, Button } from 'react-native';
import { styles } from '../Home';
export default class StyleSheetScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {/* <Text>常量（StyleSheet.hairlineWidth）：{StyleSheet.hairlineWidth}</Text> */}
        <View style={{marginLeft: 20, marginRight: 20, width: 300,height:200, borderWidth: 1/PixelRatio.get()}}>
          <Text>1像素边框：1/PixelRatio.get()</Text>
        </View>
        <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}