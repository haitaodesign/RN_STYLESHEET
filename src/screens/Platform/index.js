import * as React from 'react';
import { View, Text, Platform, Button } from 'react-native';
import { styles } from '../Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class PlatFormScreen extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={styles.container}>
       <View>
         <Text>获取操作系统：{ Platform.OS }</Text>
         <Text>获取操作系统版本：{ Platform.Version }</Text>
       </View>
       <View>
         <Text>通过Platform.select显示不同的内容</Text>
         <Text>{instructions}</Text>
       </View>
       <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}