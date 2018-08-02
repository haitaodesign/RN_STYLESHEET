import * as React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import Color from 'color';
import EStyleSheet from 'react-native-extended-stylesheet';


export default class ValueFunction extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  valueFunc = () => {

  }
  render () {
    const styles = EStyleSheet.create({
      // 让颜色变亮，或者变暗
      button: {
        backgroundColor: () => Color(EStyleSheet.value('$buttonColor')).lighten(0.5)
      }
    });
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.text}>ValueFunction</Text>
          <TouchableHighlight style={styles.button} onPress={this.valueFunc} underlayColor={styles.button}>
            <Text>样式的值作为一个函数返回</Text>
          </TouchableHighlight>
          <View>
          <Button title="返回" onPress={this.onPress}></Button>
        </View>
      </View>
    )
  }
}