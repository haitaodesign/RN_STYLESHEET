import * as React from 'react'
import { View, Text,Button } from 'react-native'
import styles from './styles';
import Button2 from './Button';
export default class Scaling extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{flex: 1,marginTop:20}}>
        <Text style={styles.text}>Scaling</Text>
        <View>
          {/* 通过缩放来控制组件的尺寸 */}
          <Button2 scale={0.5}/>
        </View>
        <View>
         <Button title="返回" onPress={this.onPress}></Button>
        </View>
      </View>
    )
  }
}